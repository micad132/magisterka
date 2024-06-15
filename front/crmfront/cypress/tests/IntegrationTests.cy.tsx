import SurveyPageContainer from "../../src/pages/SurveyPage/surveyPage.container";
import {mount} from "cypress/react18";
import {Provider} from "react-redux";
import {Survey} from "../../src/types/SurveyType";
import configureStore, { MockStoreCreator } from 'redux-mock-store';
import { RootState } from "../../src/types/StoreTypes";
import {RoleType, User, UserGender} from "../../src/types/UserType";


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

