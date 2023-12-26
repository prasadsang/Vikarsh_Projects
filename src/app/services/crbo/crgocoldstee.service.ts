import { Injectable } from '@angular/core';
import { crgo } from 'src/app/shared/models/crgo';

@Injectable({
  providedIn: 'root',
})
export class CrgocoldsteeService {
  constructor() {}
  getAll(): crgo[] {
    return [
      {
        id: 1,
        name: 'CRGO MOTHER / SLIT COILS ',
        Rate: ' : Rs.200/- to Rs.400/- per kg',
        Transformer: '',
        capacity: '',
        Stacking_factor:'',
        Size:'',
        Productcapacity: ' 1000 MT/month',
        Thickness: '',
        Material: ' Nano crystalline / Amorphous ribbons',
        Shape: ' Rectangular / Square / Customized ',
        Desity: ' 7.25 Kg/cm²',
        details:
          'Nano crystalline ribbons are fruit of complex engineering techniques.Basically a suitable alloy is made with sophisticated metallurgy followed by rapid quenching with metal spinning technology with cooling rate more than one million degree /se',
        Country_of_Origin: 'Made in India',
        imageUrl: 'assets/Nano Crystalline/rb-l9590a-500x500.jpg',
      },
      {
        id: 2,
        name: 'CRGO - TRANSFORRMER / MITERED LAMINATION ',
        Rate: ' Rs.230/- per kg',
        Transformer: 'Power / Distribution / LT',
        capacity: ' 5 KVA to 50000 KVA',
        Productcapacity: '500 MT / month',
        Thickness: ': 0.23 to 0.35 MM',
        Material: ' CRGO of various grades ',
        Shape: ' Rectangular / Square / Customized ',
        Desity: ' 7.25 Kg/cm²',
        details:
          'Our in-depth process knowledge as well as modern production facilities allow us to successfully meet the demands of Mitered Transformer Lamination. ',
        Country_of_Origin: 'Made in India',
        imageUrl: '/assets/CBCT cores for RCCB/pic1.jpg',
        Stacking_factor:'',
        Size:'',
      },
      {
        id: 3,
        name: 'CRGO TOROIDAL CORE',
        Rate: ' Rs.250/- to Rs.450/- per kg',
        Transformer: '',
        capacity: '',
        Productcapacity: ' 150 MT / month',
        Thickness: ' 0.23 mm to 0.35 mm',
        Material: ' CRGO of various grades',
        Shape: ' : Round / Rectangular / Oval',
        Desity: ' 7.25 Kg/cm²',
        details:
          '"The moon, by her comparative proximity, and the constantly varying appearances produced by her several phases, has always occupied a considerable share of the attention of the inhabitants of Earth."',
        Country_of_Origin: 'Made in India',
        imageUrl: '/assets/Welder Rectifier/pic3.jpg',
        Stacking_factor:'95% to 98%',
        Size:' OD : From 20 mm to 1500 mm',
      },
      {
        id: 4,
        name: 'CRGO RECTANGULAR STRIPS',
        Rate: 'Rs.180/- to Rs.250/- per kg',
        Transformer: '',
        capacity: '',
        Stacking_factor:'95% to 98 %',
        Size:' 20 mm to 500 mm',
        Productcapacity: ' 150 MT / month.',
        Thickness: '0.23 mm to 0.35 mm',
        Material: ' CRGO of various grades',
        Shape: ' Rectangular / with & without holes ',
        Desity: ' 7.25 Kg/cm²',
        details:
          '"The moon, by her comparative proximity, and the constantly varying appearances produced by her several phases, has always occupied a considerable share of the attention of the inhabitants of Earth."',
        Country_of_Origin: 'Made in India',
        imageUrl: '/assets/wold.jpg',

      },
      {
        id: 5,
        name: ' Unicore & Cut cores',
        Rate: ' Rs.400/- per kg',
        Transformer: '',
        capacity: '',
        Productcapacity: '50 MT / month',
        Thickness: '0.23 mm to 0.35 mm',
        Material: 'CRGO of various grades',
        Shape: ' Rectangular / Square / Customized ',
        Desity: ' 7.25 Kg/cm²',
        details:
          '"The moon, by her comparative proximity, and the constantly varying appearances produced by her several phases, has always occupied a considerable share of the attention of the inhabitants of Earth."',
        Country_of_Origin: 'Made in India',
        imageUrl: '/assets/WELDING_TRANSFORMER_IMAGE.jpg',
        Stacking_factor:'95% to 98%',
        Size:'As per requirement ',
      },
      {
        id: 6,
        name: 'CRGO / Nano crystalline copper wound cores',
        Transformer: '',
        capacity: '',
        Productcapacity: '',
        Thickness: '',
        Rate: ' Rs.1000/- to 10000/- per pc',
        Material: ' Nano crystalline ribbon / CRGO of various grade',
        Shape: ' Rectangular / Square / Customized ',
        Desity: ' 7.25 Kg/cm²',
        details:
          '"The moon, by her comparative proximity, and the constantly varying appearances produced by her several phases, has always occupied a considerable share of the attention of the inhabitants of Earth."',
        Country_of_Origin: 'Made in India',
        imageUrl: '/assets/Nano Crystalline/fg-polyester-tape-500x500.jpg',
        Stacking_factor:'',
        Size:'',
      },

    ];
  }
}
