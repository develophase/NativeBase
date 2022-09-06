import type { MutableRefObject } from 'react';
import type { InterfaceBoxProps } from '../../../components/primitives/Box';
import type { IIconProps } from '../../primitives';
import type { CustomProps } from '../../types';

export interface InterfaceAlertProps extends InterfaceBoxProps<IAlertProps> {
  /** The status of the alert
   *  @default info
   */
  status?: 'info' | 'warning' | 'success' | 'error' | (string & {});
}
export type IAlertContext = {
  status?: string;
  _icon?: IIconProps;
  variant?: string;
};

export interface IAlertIconProps extends IIconProps {}

export type IAlertComponentType = ((
  props: IAlertProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Icon: React.MemoExoticComponent<
    (props: IAlertIconProps & { ref?: MutableRefObject<any> }) => JSX.Element
  >;
};

export type IAlertProps = InterfaceAlertProps & CustomProps<'Alert'>;
