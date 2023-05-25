import FontsContainerHeader from './components/FontsContainerHeader';
import FontCard from './components/FontCard';
import useFontStore from '../../stores/fontStore';
import NotFoundLight from '../../assets/not-found-light.png';
import NotFoundDark from '../../assets/not-found-dark.png';
import _ from 'lodash';
import { useMemo, useRef, useState, useCallback, useLayoutEffect } from 'react';
import useThemeStore from '../../stores/themeStore';
import {
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
  Grid,
  WindowScroller,
} from 'react-virtualized';
import {
  DESKTOP_COLUMN_COUNT,
  DEFAULT_COLUMN_WIDTH,
  DESKTOP_MIN_SIZE,
  TABLET_MIN_SIZE,
  TABLET_COLUMN_COUNT,
  MOBILE_COLUMN_COUNT,
} from './constants';
import { ICellRenderProps } from './interfaces';

const FontsContainer = () => {
  const { fonts, fontSearchKey, categories, language, previewText, fontSize } = useFontStore();
  const { theme } = useThemeStore();

  const filteredFonts = useMemo(() => {
    let categoryKeys = _.map(
      categories,
      (item) => item.value && item.title.toLowerCase().replace(' ', '-')
    );
    categoryKeys = _.compact(categoryKeys);

    let tempFonts = [...fonts];

    if (categoryKeys.length < categories.length) {
      tempFonts = tempFonts.filter((item) =>
        categoryKeys.includes(item.category)
      );
    }

    if (language.value.length > 0) {
      tempFonts = tempFonts.filter((item) =>
        item.subsets.includes(language.value)
      );
    }

    return _.filter(tempFonts, (item) =>
      item.family.toLowerCase().includes(fontSearchKey.toLowerCase())
    );
  }, [fontSearchKey, fonts, categories, language]);

  const containerRef = useRef<Grid | null>(null);
  const [columnCount, setColumnCount] = useState(DESKTOP_COLUMN_COUNT);
  const [columnWidth, setColumnWidth] = useState(DEFAULT_COLUMN_WIDTH);

  const cellMeasureCache = useRef(
    new CellMeasurerCache({
      defaultHeight: 400,
      fixedWidth: true,
    })
  );

  const rowCount =
    Math.floor(filteredFonts.length / columnCount) + 1
   

  const handleResizeContainer = useCallback(({ width }: { width: number }) => {
    if (width > DESKTOP_MIN_SIZE) {
      setColumnCount(DESKTOP_COLUMN_COUNT);
      setColumnWidth(width / DESKTOP_COLUMN_COUNT);
      return;
    }
    if (width > TABLET_MIN_SIZE) {
      setColumnCount(TABLET_COLUMN_COUNT);
      setColumnWidth(width / TABLET_COLUMN_COUNT);
      return;
    }
    setColumnCount(MOBILE_COLUMN_COUNT);
    setColumnWidth(width);
  }, []);

  const handleCellRender = ({
    columnIndex,
    key,
    rowIndex,
    style,
    parent,
  }: ICellRenderProps) => {
    const fontIndex = rowIndex * 3 + columnIndex;
    if (fontIndex >= filteredFonts.length) return null;
    const fontData = filteredFonts[fontIndex];

    return (
      <CellMeasurer
        cache={cellMeasureCache.current}
        columnIndex={columnIndex}
        rowIndex={rowIndex}
        key={key}
        parent={parent}
      >
        <div style={style} className={`min-h-[400px] ${columnIndex !== 2 ? "pr-6" : ""} pb-6`}>
          <FontCard font={fontData}/>
        </div>
      </CellMeasurer>
    );
  };

  const handleUpdateCellCache = () => {
    cellMeasureCache.current.clearAll();
    containerRef.current && containerRef.current.recomputeGridSize();
  };
  useLayoutEffect(handleUpdateCellCache, [
    columnCount,
    columnWidth,
    filteredFonts,
    previewText,
    fontSize
  ]);

  return (
    <div>
      {filteredFonts.length === 0 ? (
        <div className="min-h-[55vh] w-[100%] flex flex-col items-center justify-center gap-3">
          <img
            className="w-28 h-28 object-cover ml-4"
            src={theme === 'light' ? NotFoundLight : NotFoundDark}
          />
          <h3 className="text-2xl font-semibold text-primaryColor/90 dark:text-tertiaryColorDark/90">
            Oops!{' '}
            <span className="text-secondaryColor text-xl dark:text-secondaryColorDark">
              No fonts found.
            </span>
          </h3>
        </div>
      ) : (
        <>
          <FontsContainerHeader
            filteredLength={filteredFonts.length}
            totalLength={fonts.length}
          />
          <div className="mt-2 pb-10">
            <WindowScroller autoContainerWidth>
              {({ height, scrollTop, onChildScroll }) => {
                return (
                  <AutoSizer
                    disableHeight
                    autoContainerWidth
                    onResize={handleResizeContainer}
                  >
                    {({ width }) => (
                      <Grid
                        ref={(ref) => (containerRef.current = ref)}
                        autoContainerWidth
                        autoHeight
                        height={height}
                        width={width}
                        columnWidth={columnWidth}
                        columnCount={columnCount}
                        scrollTop={scrollTop}
                        onScroll={onChildScroll}
                        cellRenderer={handleCellRender}
                        rowHeight={cellMeasureCache.current.rowHeight}
                        rowCount={rowCount}
                        style={{ gap: '10px' }}
                      />
                    )}
                  </AutoSizer>
                );
              }}
            </WindowScroller>
          </div>

          {/* <div className=" mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
            {_.map(filteredFonts, (item) => (
              <FontCard key={item.family} font={item} />
            ))}
          </div> */}
        </>
      )}
    </div>
  );
};

export default FontsContainer;
