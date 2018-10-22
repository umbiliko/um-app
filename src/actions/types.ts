// DELETE/GET/PATCH/POST/PUT
export const AJAX_ABANDON = 'AJAX_ABANDON';
export const AJAX_FAILURE = 'AJAX_FAILURE';
export const AJAX_REQUEST = 'AJAX_REQUEST';
export const AJAX_SUCCESS = 'AJAX_SUCCESS';

// DELETE
export const ENTITY_DUMP_ABANDON = 'ENTITY_DUMP_ABANDON';
export const ENTITY_DUMP_FAILURE = 'ENTITY_DUMP_FAILURE';
export const ENTITY_DUMP_REQUEST = 'ENTITY_DUMP_REQUEST';
export const ENTITY_DUMP_SUCCESS = 'ENTITY_DUMP_SUCCESS';

// GET (one)
export const ENTITY_LOAD_ABANDON = 'ENTITY_LOAD_ABANDON';
export const ENTITY_LOAD_FAILURE = 'ENTITY_LOAD_FAILURE';
export const ENTITY_LOAD_REQUEST = 'ENTITY_LOAD_REQUEST';
export const ENTITY_LOAD_SUCCESS = 'ENTITY_LOAD_SUCCESS';

// GET (many)
export const ENTITY_PAGE_ABANDON = 'ENTITY_PAGE_ABANDON';
export const ENTITY_PAGE_FAILURE = 'ENTITY_PAGE_FAILURE';
export const ENTITY_PAGE_REQUEST = 'ENTITY_PAGE_REQUEST';
export const ENTITY_PAGE_SUCCESS = 'ENTITY_PAGE_SUCCESS';

// PATCH/POST/PUT
export const ENTITY_SAVE_ABANDON = 'ENTITY_SAVE_ABANDON';
export const ENTITY_SAVE_FAILURE = 'ENTITY_SAVE_FAILURE';
export const ENTITY_SAVE_REQUEST = 'ENTITY_SAVE_REQUEST';
export const ENTITY_SAVE_SUCCESS = 'ENTITY_SAVE_SUCCESS';

//////////////////////////////////////////////////////////////

export const CLOSE_SAVE_ABANDON = 'CLOSE_SAVE_ABANDON';
export const CLOSE_SAVE_FAILURE = 'CLOSE_SAVE_FAILURE';
export const CLOSE_SAVE_REQUEST = 'CLOSE_SAVE_REQUEST';
export const CLOSE_SAVE_SUCCESS = 'CLOSE_SAVE_SUCCESS';

export const START_LOAD_ABANDON = 'START_LOAD_ABANDON';
export const START_LOAD_FAILURE = 'START_LOAD_FAILURE';
export const START_LOAD_REQUEST = 'START_LOAD_REQUEST';
export const START_LOAD_SUCCESS = 'START_LOAD_SUCCESS';

export const SIGN_IN_ABANDON = 'SIGN_IN_ABANDON';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

export const SIGN_OUT_ABANDON = 'SIGN_IN_ABANDON';
export const SIGN_OUT_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_OUT_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_IN_SUCCESS';

export const SIGN_UP_ABANDON = 'SIGN_IN_ABANDON';
export const SIGN_UP_FAILURE = 'SIGN_IN_FAILURE';
export const SIGN_UP_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_IN_SUCCESS';

// set to run as a background process inmediatly and end request without waiting for task result
export const TASK_ASYNC_ABANDON = 'TASK_ASYNC_ABANDON';
export const TASK_ASYNC_FAILURE = 'TASK_ASYNC_FAILURE';
export const TASK_ASYNC_REQUEST = 'TASK_ASYNC_REQUEST';
export const TASK_ASYNC_SUCCESS = 'TASK_ASYNC_SUCCESS';

// request ends when tasks completes
export const TASK_AWAIT_ABANDON = 'TASK_AWAIT_ABANDON';
export const TASK_AWAIT_FAILURE = 'TASK_AWAIT_FAILURE';
export const TASK_AWAIT_REQUEST = 'TASK_AWAIT_REQUEST';
export const TASK_AWAIT_SUCCESS = 'TASK_AWAIT_SUCCESS';

// create task to be ran as a background process but task won't be started automatically, instead the scheduler has to be used.
export const TASK_SLEEP_ABANDON = 'TASK_SLEEP_ABANDON';
export const TASK_SLEEP_FAILURE = 'TASK_SLEEP_FAILURE';
export const TASK_SLEEP_REQUEST = 'TASK_SLEEP_REQUEST';
export const TASK_SLEEP_SUCCESS = 'TASK_SLEEP_SUCCESS';

// discard sleeping task
export const TASK_WASTE_ABANDON = 'TASK_WASTE_ABANDON';
export const TASK_WASTE_FAILURE = 'TASK_WASTE_FAILURE';
export const TASK_WASTE_REQUEST = 'TASK_WASTE_REQUEST';
export const TASK_WASTE_SUCCESS = 'TASK_WASTE_SUCCESS';

export * from './change/types';
export * from './operations/types';