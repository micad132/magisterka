import LoggedUserDetailsComponent from "../../src/pages/ProfilePage/components/loggedUserDetails.component";
import {mount} from "cypress/react18";
import {LoggedUserMainDetails, RoleType } from "../../src/types/UserType";
import PageHeaderComponent from "../../src/components/pageHeader.component";
import PageItemsCountComponent from "../../src/components/pageItemsCount.component";
import TaskTypeBadge from "../../src/components/taskTypeBadge.component";
import {TaskOrigin, TaskPriority, TaskType} from "../../src/types/TaskType";
import TaskOriginTagComponent from "../../src/components/taskOriginTag.component";
import TaskPriorityBadgeComponent from "../../src/components/taskPriorityBadge.component";
import {mountWithChakra} from "../support";
import RateTagComponent from "../../src/components/rateTag.component";
import {SurveyRating} from "../../src/types/SurveyType";
import RoleTagComponent from "../../src/components/roleTag.component";
import SupportCategoryBadgeComponent from "../../src/components/supportCategoryBadge.component";
import {SupportRequest} from "../../src/types/SupportRequest";
import CreatedAtComponent from "../../src/pages/SurveyPage/components/createdAt.component";
import SurveyAuthorComponent from "../../src/pages/SurveyPage/components/surveyAuthor.component";



const userData: LoggedUserMainDetails = {
    username: 'testuser',
    userRole: RoleType.WORKER,
    createdAccountDate: '12-12-2023',
};

describe('Components tests', () => {
    it('Should display proper logged user details', () => {
        // see: https://on.cypress.io/mounting-react
        mount(<LoggedUserDetailsComponent  loggedUserMainDetails={userData} />);
        // Sprawdzanie, czy komponent renderuje nazwę użytkownika
        cy.contains('testuser').should('exist');
        // Sprawdzanie, czy komponent renderuje rolę użytkownika
        cy.contains('PRACOWNIK').should('exist');
        // Sprawdzanie, czy komponent renderuje datę utworzenia konta
        cy.contains('Użytkownik zarejestrowany: 12-12-2023').should('exist');
    });
    it('Should display proper page header', () => {
        mount(<PageHeaderComponent text={'Wiadomości'} />);
        cy.contains('Wiadomości').should('exist');
    })
    it('Should contain proper page items count', () => {
        mount(<PageItemsCountComponent  count={3} text='wiadomości' />);
        cy.contains('W systemie znajduje się 3 wiadomości').should('exist');
    })
    it('Should display proper task type badge', () => {
        mount(<TaskTypeBadge  taskType={TaskType.INFORMATIC} />);
        cy.contains('INFORMATYCZNA').should('exist');
    })
    it('Should display proper task origin tag', () => {
        mount(<TaskOriginTagComponent taskOrigin={TaskOrigin.CREATED} />);
        cy.contains('Utworzony').should('exist');
    })
    it('Should display proper task priority badge', () => {
        mount(<TaskTypeBadge taskType={TaskType.LOGISTIC} />);
        cy.contains('LOGISTYCZNA').should('exist');
    })
    it('Should display proper task priority status badge', () => {
        mountWithChakra(<TaskPriorityBadgeComponent taskPriority={TaskPriority.CRITICAL} />);
        cy.contains('KRYTYCZNY').should('exist');
    })
    it('Should display proper rate tag', () => {
        mountWithChakra(<RateTagComponent rate={SurveyRating.HIGH} />);
        cy.contains('WYSOKA').should('exist');
    })
    it('Should display proper role tag', () => {
        mountWithChakra(<RoleTagComponent role={RoleType.ADMIN} />);
        cy.contains('ADMIN').should('exist');
    })
    it('Should display proper support category', () => {
        mountWithChakra(<SupportCategoryBadgeComponent supportType={SupportRequest.BUG} />);
        cy.contains('PROBLEM').should('exist');
    })
    it('Should display proper created at in survey page', () => {
        mount(<CreatedAtComponent createdDate={'27.03.2024 23:21'} />);
        cy.contains('27.03.2024 23:21').should('exist');
    })
    it('Should display proper survey author in survey page', () => {
        mount(<SurveyAuthorComponent  authorUsername={'mikad132'} />);
        cy.contains('Wykonana przez: mikad132').should('exist');
    })
})
