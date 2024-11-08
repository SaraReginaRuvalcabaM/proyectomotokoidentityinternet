import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface User { 'nombre' : string, 'edad' : bigint }
export interface _SERVICE {
  'quienes' : ActorMethod<[], Principal>,
  'verusuarios' : ActorMethod<[], Array<User>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
