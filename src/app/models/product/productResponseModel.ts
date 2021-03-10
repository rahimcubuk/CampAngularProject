import { ResponseModel } from '../responseModel';
import { Product } from './product';

// responseModel base. inherit etmek icin 'extends' kullanilir.
export interface ProductResponseModel extends ResponseModel {
  data: Product[];
}
