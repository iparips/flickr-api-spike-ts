import React, {Dispatch, SetStateAction} from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {Form} from '../index';
import FakeTimers, {InstalledClock} from "@sinonjs/fake-timers";

jest.mock('use-debounce', () => ({
    useDebounce: (value: string) => [value]
}));
jest.mock('fetch-jsonp');
import fetchJsonp from 'fetch-jsonp';
import {buildResponse, buildResponseItem} from "../../tests/buildResponse";
import {Image} from "../../types";

describe('Form/index', () => {
    let form: ReactWrapper;
    let clock: InstalledClock;
    let setSearchResults: Dispatch<SetStateAction<Image[]>>;
    const imageUrl = "image url";

    const typeSearchTerm = (form: ReactWrapper, term: string) => {
        form.find("input#searchTerm").simulate('change', {
            target: {value: term}
        });
        clock.tick(200);
    }

    beforeEach(() => {
        // Fake timers are required to because I used debounce in the component,
        // which waits 100ms before updating the search results.
        clock = FakeTimers.install({
            now: new Date('1995-12-17T03:24:00')
        });
        setSearchResults = jest.fn();
        const responseItem = buildResponseItem({
            media: { m: imageUrl}
        });
        // @ts-ignore
        fetchJsonp.mockImplementation(() => Promise.resolve({
            json: () => buildResponse([responseItem])
        }));
        form = mount(<Form setSearchResults={setSearchResults}/>);
    });

    afterEach(function () {
        clock.uninstall();
    });

    it('calls fetch with search term', () => {
        typeSearchTerm(form,"Hello");
        expect(fetchJsonp).toHaveBeenLastCalledWith(
            expect.stringContaining('tags=Hello'), expect.anything()
        );
    });

    // This is an integration style test proving that mapResponseToImages
    // has been called by checking one of the mapped fields is passed through
    // to setSearchResults. The complete detail of the mapping is checked in
    // the mapper test.
    it('maps response and sets search results', () => {
        typeSearchTerm(form,"Hello");
        expect(setSearchResults).toHaveBeenCalledWith(
            expect.arrayContaining(
                [expect.objectContaining({src: imageUrl})]
            )
        );
    });

});
