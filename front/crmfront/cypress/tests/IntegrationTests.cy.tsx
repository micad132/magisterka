import SurveyPageContainer from "../../src/pages/SurveyPage/surveyPage.container";
import {mount} from "cypress/react18";
import {Provider} from "react-redux";
import {Survey} from "../../src/types/SurveyType";
import configureStore, { MockStoreCreator } from 'redux-mock-store';
import { RootState } from "../../src/types/StoreTypes";
import { RoleType, User, UserGender, WorkerProfileCount} from "../../src/types/UserType";
import WorkerStatsWrapperComponent from "../../src/pages/ProfilePage/components/stats/workerStatsWrapper.component";
import SupportPageContainer from "../../src/pages/SupportPage/supportPage.container";


const mockedSurveys: Survey[] = [
    {
        id: 1,
        authorUsername: 'mikad132',
        supportRate: 2.3,
        messageRate: 2.1,
        taskRate: 3.7,
        createdTime: '24.03.2024 12:32',
        authorSurname: 'mosiolek',
        authorName: 'michal',
    },
    {
        id: 2,
        authorUsername: 'mikad132',
        supportRate: 2.3,
        messageRate: 2.1,
        taskRate: 3.7,
        createdTime: '24.03.2024 12:32',
        authorSurname: 'mosiolek',
        authorName: 'michal',
    }
]

const mockedUsers: User[] = [
{
    id: 1,
    userRole: RoleType.CLIENT,
    userGender: UserGender.MAN,
    age: 30,
    provinceName: 'Mazowieckie',
    pesel: '12345678901',
    username: 'client1',
    streetName: 'Test Street',
    postalCode: '00-001',
    phoneNumber: '123456789',
    email: 'client1@example.com',
    name: 'Jan',
    surname: 'Kowalski',
    cityName: 'Warszawa',
    createdAccountDate: '2022:01:01',
    messages: [],
    comments: [],
    stats: [],
    supportRequestModels: [],
    surveys: [],
    histories: [],
    createdTasks: [],
    assignedTasks: [],
},{
    id: 2,
    userRole: RoleType.CLIENT,
    userGender: UserGender.WOMAN,
    age: 25,
    provinceName: 'Pomorskie',
    pesel: '09876543210',
    username: 'worker1',
    streetName: 'Worker Street',
    postalCode: '80-001',
    phoneNumber: '987654321',
    email: 'worker1@example.com',
    name: 'Anna',
    surname: 'Nowak',
    cityName: 'Gdańsk',
    createdAccountDate: '2023-05-15',
    messages: [],
    comments: [],
    stats: [],
    supportRequestModels: [],
    surveys: [],
    histories: [],
    createdTasks: [],
    assignedTasks: [],
}
]

const initialState: RootState = {
    survey: {
        surveys: mockedSurveys,
    },
    user: {
        users: mockedUsers,
        userDetails: mockedUsers[0],
    },
    supportRequest: {
        supportRequests: [],
    }
};

const mockStore: MockStoreCreator<RootState> = configureStore([]);
it('Should display proper info on SurveyPage', () => {
    const store = mockStore(initialState);


    mount(
        <Provider store={store}>
            <SurveyPageContainer />
        </Provider>
    );

    // Sprawdzenie czy PageHeaderComponent wyświetla poprawny tekst
    cy.contains('Ankiety klienta').should('exist');

    // Sprawdzenie czy PageItemsCountComponent wyświetla poprawny tekst
    cy.contains('2 ankiety').should('exist');
})


    it('should return unauthorized without JWT token', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8080/api/v1/user',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(401);
        });
    });





    it('Should display proper worker data count', () => {

        const count: WorkerProfileCount = {
            historiesCount: 3,
            commentsCount: 2,
            messagesCount: 7,
            taskAssigneeCount: 1,
            tasksMadeCount: 2,
        }

        mount(<WorkerStatsWrapperComponent  count={count} />);
        cy.get('[data-testid="single-stat-Wiadomości"]').contains('Wiadomości');
        cy.get('[data-testid="single-stat-count-Wiadomości"]').contains('7');

        cy.get('[data-testid="single-stat-Stworzone Usługi"]').contains('Stworzone Usługi');
        cy.get('[data-testid="single-stat-count-Stworzone Usługi"]').contains('2');

        cy.get('[data-testid="single-stat-Przypisane Usługi"]').contains('Przypisane Usługi');
        cy.get('[data-testid="single-stat-count-Przypisane Usługi"]').contains('1');

        cy.get('[data-testid="single-stat-Komentarze"]').contains('Komentarze');
        cy.get('[data-testid="single-stat-count-Komentarze"]').contains('2');

        cy.get('[data-testid="single-stat-Historia akcji"]').contains('Historia akcji');
        cy.get('[data-testid="single-stat-count-Historia akcji"]').contains('3');

    })

it('Should display proper info when there are no supports', () => {

    const store = mockStore(initialState);
    mount(
        <Provider store={store}>
            <SupportPageContainer />
        </Provider>
    );
    cy.contains('Zgłoszenia wsparcia').should('exist');
    cy.contains('W systemie nie ma zgłoszeń wsparcia').should('exist');

})

