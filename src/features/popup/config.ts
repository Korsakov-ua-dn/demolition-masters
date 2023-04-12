import { Contacts } from './ui/contacts';

export enum POPUPS {
  contacts = 'contacts',
}

export const popups = {
  [POPUPS.contacts]: Contacts,
};

export type PopupsNameType = keyof typeof popups;

type RequiredPopupType = {
  name: PopupsNameType;
  onClose: (result?: any) => void;
};

type OptionalPopupType = {
  [key: string]: any;
};

export type CommonPopupType = RequiredPopupType & OptionalPopupType;
