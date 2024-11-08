export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({ 'nombre' : IDL.Text, 'edad' : IDL.Nat });
  return IDL.Service({
    'quienes' : IDL.Func([], [IDL.Principal], ['query']),
    'verusuarios' : IDL.Func([], [IDL.Vec(User)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
