import React from 'react';
const ICON_NAMES = {
    BARS: 'icon-bars',
    ARROW_UP: 'icon-chevron-up',
    ARROW_RIGHT: 'icon-chevron-right',
    ARROW_DOWN: 'icon-chevron-down',
    ARROW_LEFT: 'icon-chevron-left',
    CIRCLE: 'icon-circle',
    CHECK: 'icon-check',
    SPINNER: 'icon-spinner',
    ANGLE_DOWN: 'icon-angle-down'
};
const BASE_CLS = {
    NORMAL: 'ds-icon',
    ROUNDED: 'ds-icon-bordered'
};
const SIZES = {
    X16: 'x16',
    X18: 'x18',
    X24: 'x24',
    X32: 'x32',
    X36: 'x36',
    X48: 'x48',
    X64: 'x64'
};

// The classes must be applied in the following order:

// *    iconName
// *    baseCls
// *    specificCls
// *    size

export const IconPortalTrigger = props => (
    <span        
        // Change for ANGLE_DOWN
        className={ `${ICON_NAMES.ARROW_DOWN} ${BASE_CLS.NORMAL} ds-icon-portal-trigger ${SIZES.X18}` }
        { ...props }
    />
);