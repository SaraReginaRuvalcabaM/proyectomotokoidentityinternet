import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
actor {
  //definir columnas sus tipos de una tabla
    type User={
    nombre:Text;
    edad:Nat;
  };
  //se crea la tabla con los registros
  stable var user:[User]=[{
    nombre="Sandra";
    edad=12;
  },{
    nombre="Carlos";
    edad=18;
  }];
  //caller es donde se ve si el internet identity  fue verificado por el usuario
  public shared  query ({caller})func quienes():async Principal{
    return caller;
  };
//evalua si el usuario esta autenticado y si es asi deja realizar la funcion de ver los usuarios
  public shared query ({caller}) func verusuarios():async [User]{
    if(Principal.isAnonymous(caller)){
      return [];
    }
    else{return user;};
    
  };
};
