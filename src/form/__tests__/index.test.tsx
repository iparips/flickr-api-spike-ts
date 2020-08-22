import React from 'react';
import {mount, ReactWrapper} from 'enzyme';
import {Form} from '../index';
import FakeTimers, {InstalledClock} from "@sinonjs/fake-timers";

jest.mock('use-debounce', () => ({
    useDebounce: (value: string) => [value]
}));
jest.mock('fetch-jsonp');
import fetchJsonp from 'fetch-jsonp';

describe('Form/index', () => {
    let form: ReactWrapper;
    let clock: InstalledClock;

    beforeEach(() => {
        clock = FakeTimers.install({
            now: new Date('1995-12-17T03:24:00')
        });
        const setSearchResults = jest.fn();
        // @ts-ignore
        fetchJsonp.mockImplementation(() => Promise.resolve());
        form = mount(<Form setSearchResults={setSearchResults}/>);
    });

    afterEach(function () {
        clock.uninstall();
    });

    it('calls fetch with search term', () => {
        form.find("input#searchTerm").simulate('change', {
            target: {value: 'Hello'}
        });

        clock.tick(200);
        form.update();

        expect(fetchJsonp).toHaveBeenLastCalledWith(
            expect.stringContaining('tags=Hello'), expect.anything()
        );
    });

    it('maps response and sets search results', () => {

    });

});
