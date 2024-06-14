import BadRouteWrapperComponent from '../../../components/routesComponents/badRouteWrapper.component';
import NotLoggedUserFunctionsComponent from './notLoggedUserFunctions.component.tsx';

const clientFunc: string[] = [
  'Tworzyć usługi',
  'Zmieniać swoje dane osobowe',
  'Wysyłać i przeglądać swoje zgłoszenia wsparcia',
  'Wykonywać ankiety',
  'Wysyłać wiadomości do innych w systemie oraz przeglądać swoje wysłane i odebrane',
  'Tworzyć i przeglądać komentarze pod zadaniami',
  'Przeglądać swoją historię działań',
];

const workerFunc: string[] = [
  'Edytować szczegóły usług',
  'Przeglądać wykresy w systemie',
  'Przeglądać istniejące dane w systemie',
  'Wysyłać wiadomości do innych w systemie',
  'Tworzyć komentarze pod zadaniami',
  'Zmieniać swoje dane osobowe',
];

const adminFunc: string[] = [
  'Usuwać i przeglądać wszystkie usługi',
  'Usuwać i przeglądać wszystkie zadania',
  'Usuwań i przeglądać wszystkie zgłoszenia wsparcia',
  'Usuwać i przeglądac ankiety',
  'Usuwać i przeglądać wszystkich użytkowników',
  'Zarządzać wykresami oraz je usuwać',
  'Filtrować użytkowników oraz dane w systemie',
];

const NotLoggedUserHomeComponent = () => (
  <BadRouteWrapperComponent>
    <p>Nie jesteś zalogowany do systemu</p>
    <p>Zaloguj się jako klient aby:</p>
    <NotLoggedUserFunctionsComponent functions={clientFunc} />
    <p>Zaloguj się jako pracownik aby:</p>
    <NotLoggedUserFunctionsComponent functions={workerFunc} />
    <p>Zaloguj się jako admin aby:</p>
    <NotLoggedUserFunctionsComponent functions={adminFunc} />
  </BadRouteWrapperComponent>
);

export default NotLoggedUserHomeComponent;
