import { runLoader } from '../mocks';
import { TranslocoService } from '../../transloco.service';

export function loadLang(service: TranslocoService, lang = 'en') {
  service.load(lang).subscribe();
  runLoader();
}
