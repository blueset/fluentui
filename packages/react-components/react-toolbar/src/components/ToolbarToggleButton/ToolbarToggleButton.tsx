import * as React from 'react';
import type { ToolbarToggleButtonProps } from './ToolbarToggleButton.types';
import type { ForwardRefComponent } from '@fluentui/react-utilities';
import { renderToggleButton_unstable } from '@fluentui/react-button';
import { useToolbarToggleButton_unstable } from './useToolbarToggleButton';
import { useToolbarToggleButtonStyles_unstable } from './useToolbarToggleButtonStyles';
import { useCustomStyleHooks_unstable } from '@fluentui/react-shared-contexts';

/**
 * ToolbarToggleButton component
 */
export const ToolbarToggleButton: ForwardRefComponent<ToolbarToggleButtonProps> = React.forwardRef((props, ref) => {
  const state = useToolbarToggleButton_unstable(props, ref);

  useToolbarToggleButtonStyles_unstable(state);

  const { useToolbarToggleButtonStyles_unstable: useCustomStyles } = useCustomStyleHooks_unstable();
  useCustomStyles(state);

  return renderToggleButton_unstable(state);
}) as ForwardRefComponent<ToolbarToggleButtonProps>;

ToolbarToggleButton.displayName = 'ToolbarToggleButton';
