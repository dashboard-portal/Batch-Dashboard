import BatchDashboard from './containers/batchDashboard/BatchDashboard.container'
/**
 * Provisional info in MENU_ROUTES
 * TODO: Add the real menu options
 */
export const MENU_ROUTES = [{
    path: '/batch',
    text: 'Batch'
}, {
    path: '/test',
    text: 'Test'
}];
export const CONTAINER_ROUTES = [{
    path: '/batch',
    component: BatchDashboard
}];