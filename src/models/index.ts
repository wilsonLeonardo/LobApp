import * as Imobiliaria from './imobiliaria';
import * as Negociacao from './negociacao';
import * as Treinamentos from './treinamentos';
import * as Usuario from './usuario';
// import * as Telefone from './telefone';

export const Entities = [
  Imobiliaria.CodigoAcesso,
  Imobiliaria.ImobiliariaCodigoAcesso,
  Imobiliaria.ImobiliariaLoteamento,
  Imobiliaria.ImobiliariaCorretor,
  Imobiliaria.ImobiliariaLoteamentoLotes,
  Imobiliaria.ImobiliariaLoteamentoLotesTipo,
  Usuario.Usuario,
  Usuario.UsuarioPerfil,
  Usuario.Endereco,
  Negociacao.Negociacao,
  Treinamentos.Treinamentos,
];

export const AllModels = {
  ...Imobiliaria,
  ...Usuario,
  ...Negociacao,
  ...Treinamentos,
};
