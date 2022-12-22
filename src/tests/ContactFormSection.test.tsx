import { render, fireEvent } from '@testing-library/react';
import ContactFormSection from '../sections/ContactFormSection';

describe(ContactFormSection, () => {

    it('render correnctly', () => {
        const { queryByTestId } = render(<ContactFormSection />)
        
        expect(queryByTestId ("btn-theme")).toBeTruthy()
        
    })

})
