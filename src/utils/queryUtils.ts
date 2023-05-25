import deparam from 'deparam.js';
import _ from 'lodash';

export interface IFilter{
    fontSearchKey?: string
    categories?: string
    fontSize?: string
    language: string
}

const PARAMS = [
  {
    param: 'font',
    queryField: 'fontSearchKey',
    valueType: "string"
  },
  {
    param: 'category',
    queryField: 'categories',
    valueType: "ICheckboxOption[]"
  },
  {
    param: 'fontSize',
    queryField: 'fontSize',
    valueType: "IOption"
  },
  {
    param: 'subset',
    queryField: 'language',
    valueType: "IOption"
  },
];

const getQueryParams = () => {
  if (!window.location.search) {
    return {};
  }

  let searchUrl = `${window.location.search}`;
  searchUrl = searchUrl.substring(1);

  if (!searchUrl) {
    return {};
  }

  const queryParams = deparam(searchUrl, true);

  return queryParams;
};

const buildFiltersByQueryParams = () : IFilter => {
  const queryParams = getQueryParams();

  if (_.isEmpty(queryParams)) return {} as IFilter;

  const filters : IFilter = {} as IFilter

  _.forEach(PARAMS, o => {
    if(_.get(queryParams, o.param)){
        const value = queryParams[o.param].toLowerCase().trim()
        _.set(filters, o.queryField, value)
    }
  });

  return filters
};

export { getQueryParams, buildFiltersByQueryParams };
