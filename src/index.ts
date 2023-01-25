import api from './api';
import vars from './vars';

api.listen(vars.api.port, () => {
  console.log(`Rodando na ${vars.api.port}`);
});