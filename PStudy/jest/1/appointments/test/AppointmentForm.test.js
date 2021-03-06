describe("test", () => {
    it("test2", () => {

    })
});
// import React from 'react';
// import ReactTestUtils from 'react-dom/test-utils';
// import { createContainer} from "./domManipulators";
// import {AppointmentForm} from "../src/AppointmentForm";
//
//
// describe("AppointmentForm", () => {
//     let render, container;
//
//     beforeEach(() => {
//         ({render, container} = createContainer());
//     });
//
//     const form = id => container.querySelector(`form[id="${id}"]`);
//
//     it('render a form', () => {
//         render(<AppointmentForm/>);
//         expect(form('appointment')).not.toBeNull();
//     });
//
//     describe('service field', () => {
//         it('렌더링 select box', () => {
//             render(<AppointmentForm />);
//             expect(form('appointment').elements.service)
//                 .not.toBeNull();
//             expect(form('appointment').elements.service.tagName)
//                 .toEqual('SELECT');
//         })
//     });
//
//     const field = name => form('appointment').elements[name];
//
//     // it('renders as a select box', () => {
//     //     expect(field("service")).not.toBeNull();
//     //     expect(field("service").tagName).toEqual('SELECT');
//     // });
//
//     it('initially has a blank value chosen', () => {
//         render(<AppointmentForm />);
//         const firstNode = field('service').childNodes[0];
//         expect(firstNode.value).toEqual('');
//         expect(firstNode.selected).toBeTruthy();
//     });
//     /**
//      * SELECT
//      * */
//     it('lists all salon services', () => {
//         const selectableServices = [
//             'Cut',
//             'Blow-dry',
//             'Cut & color',
//             'Beard trim'
//         ];
//
//         render(
//             <AppointmentForm
//                 selectableServices={selectableServices}
//             />
//         );
//
//         const optionNodes = Array.from(
//             field('service').childNodes
//         );
//         const renderedServices = optionNodes.map(
//             node => node.textContent
//         );
//         expect(renderedServices).toEqual(
//             expect.arrayContaining(selectableServices)
//         );
//     });
//
//     const findOption = (dropdownNode, textContent) => {
//         const options = Array.from(dropdownNode.childNodes);
//         return options.find(
//             option => option.textContent === textContent
//         );
//     };
//
//     it('pre-selects the existing value', () => {
//         const services = ['Cut', 'Blow-dry'];
//         render(
//             <AppointmentForm
//                 selectableServices={services}
//                 service="Blow-dry"
//             />
//         );
//
//         const option = findOption(
//             field('service'),
//             "Blow-dry"
//         );
//
//         expect(option.selected).toBeTruthy();
//     });
//
//
//     /***
//      * table
//      */
//     describe('time slot table', () => {
//         const timeSlotTable = () =>
//             container.querySelector('table#time-slots');
//
//         it('renders atable for time slots', () => {
//             render(<AppointmentForm />);
//             expect(container.querySelector('table#time-slots')).not.toBeNull();
//             expect(timeSlotTable).not.toBeNull();   // 위와 동일
//         });
//
//         it('renders', () => {
//             render(
//                 <AppointmentForm salonOpenAt={9} salonCloseAt={11} />
//             );
//             const timesOfDay = timeSlotTable().querySelectorAll(
//                 'tbody >* th'
//             );
//             expect(timesOfDay).toHaveLength(20);
//             expect(timesOfDay[0].textContent).toEqual('09:00');
//             expect(timesOfDay[1].textContent).toEqual('09:30');
//             expect(timesOfDay[3].textContent).toEqual('10:30');
//         });
//
//         it('renders an empty cell at the start of the header row', () => {
//             render(<AppointmentForm />);
//             const headerRow = timeSlotTable().querySelector(
//                 'thead > tr'
//             );
//             expect(headerRow.firstChild.textContent).toEqual('');
//         });
//
//         it('renders a week of available dates', () => {
//             const today = new Date(2018, 11, 1);
//             render(<AppointmentForm today={today} />);
//             const dates = timeSlotTable().querySelectorAll(
//                 'thead >* th:not(:first-child)'
//             );
//             expect(dates).toHaveLength(7);
//             expect(dates[0].textContent).toEqual('Sat 01');
//             expect(dates[1].textContent).toEqual('Sun 02');
//             expect(dates[6].textContent).toEqual('Fri 07');
//         });
//
//
//
//         it('renders a radio button for each time slot', () => {
//             const today = new Date();
//             const availableTimeSlots = [
//                 { startsAt: today.setHours(9, 0, 0, 0) },
//                 { startsAt: today.setHours(9, 30, 0, 0) }
//             ];
//             render(
//                 <AppointmentForm
//                     availableTimeSlots={availableTimeSlots}
//                     today={today}
//                 />
//             );
//             const cells = timeSlotTable().querySelectorAll('td');
//             // 라디오 버튼이 있는 지 확인
//             expect(cells[0].querySelector('input[type="radio"]')).not.toBeNull();
//             expect(cells[7].querySelector('input[type="radio"]')).not.toBeNull();
//         });
//
//
//         it('빈값일 때 라디오 버튼이 없어야 한다.', () => {
//             render(<AppointmentForm availableTimeSlots={[]} />);
//             const timesOfDay = timeSlotTable().querySelectorAll(
//                 'input'
//             );
//             expect(timesOfDay).toHaveLength(0);
//         });
//
//         const startsAtField = index =>
//             container.querySelectorAll(`input[name="startsAt"]`)[
//                 index
//                 ];
//
//         it('sets radio button values to the index of the corresponding appointment', () => {
//             const today = new Date();
//             const availableTimeSlots = [
//                 { startsAt: today.setHours(9, 0, 0, 0) },
//                 { startsAt: today.setHours(9, 30, 0, 0) }
//             ];
//             render(
//                 <AppointmentForm
//                     availableTimeSlots={availableTimeSlots}
//                     today={today}
//                 />);
//             expect(startsAtField(0).value).toEqual(availableTimeSlots[0].startsAt.toString());
//             expect(startsAtField(1).value).toEqual(availableTimeSlots[1].startsAt.toString());
//         });
//
//
//         it('saves new value when submitted', async () => {
//             expect.hasAssertions();
//             const today = new Date();
//             const availableTimeSlots = [
//                 { startsAt: today.setHours(9, 0, 0, 0) },
//                 { startsAt: today.setHours(9, 30, 0, 0) }
//             ];
//             render(
//                 <AppointmentForm
//                     availableTimeSlots={availableTimeSlots}
//                     today={today}
//                     startsAt={availableTimeSlots[0].startsAt}
//                     onSubmit={({ startsAt }) =>
//                         expect(startsAt).toEqual(availableTimeSlots[1].startsAt)
//                     }
//                 />
//             );
//             ReactTestUtils.Simulate.change(startsAtField(1), {
//                 target: {
//                     value: availableTimeSlots[1].startsAt.toString(),
//                     name: 'startsAt'
//                 }
//             });
//             await ReactTestUtils.Simulate.submit(form('appointment'));
//         });
//     });
// });
//
//
