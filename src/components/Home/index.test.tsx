import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./index";

describe("BuyLevel6 - Benefits Group Section Mobile", () => {
  //   test('It should render Benefits items component correctly', () => {
  //     const props = {
  //       id: 'benefits-items',
  //       type: 'benefits-items',
  //       content: {
  //         title: 'Los mejores descuentos en envíos',
  //         items: [
  //           {
  //             icon: 'truck_shipping_large',
  //             description: '45% OFF en tus envíos',
  //           },
  //           {
  //             icon: 'truck_large_v2',
  //             description: 'Envíos gratis a partir de $ 4.000',
  //           },
  //         ],
  //       },
  //     };

  //     const { asFragment } = render(<BenefitsComponent {...props} />);
  //     expect(asFragment()).toMatchSnapshot();
  //   });

  test("It should render Benefits image component correctly", () => {
    const { asFragment } = render(
      <Router>
        <Home />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });

  //   test('It should render Benefits Partners component correctly', () => {
  //     const props = {
  //       id: 'partner-benefits',
  //       type: 'partner-benefits',
  //       content: {
  //         title: 'Más descuentos en suscripciones',
  //         pill: {
  //           label: '50% OFF',
  //           color: '#FFFFFF',
  //           background_color: '#00A650',
  //         },
  //         items: [
  //           {
  //             name: 'HBO Max',
  //             description: 'Grandes estrenos, series exclusivas, contenido para la familia y más.',
  //             picture: {
  //               alt: 'HBO Max',
  //               src: {
  //                 '1x': 'https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@2x.png?v=1',
  //                 '2x': 'https://http2.mlstatic.com/resources/frontend/statics/loyal/partners/hbomax/logo/logoSquare@3x.png?v=1',
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     };

  //     const { asFragment } = render(<BenefitsComponent {...props} />);
  //     expect(asFragment()).toMatchSnapshot();
  //   });
});
