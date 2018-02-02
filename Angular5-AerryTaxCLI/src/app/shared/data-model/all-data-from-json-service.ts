
import { ITaxation } from './taxation';

export interface IAllDataFromJsonService {
    id: string;
    ppu: number;
    batters: Array<any>;
    navDropdown: any[];
    tabs: Array<ITaxation>;
    formControlNames: Array<any>;
    formValidation: Array<any>;
}
