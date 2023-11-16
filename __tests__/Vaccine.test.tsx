import HospitalCatalog from "@/components/HospitalCatalog";
import { render, screen, waitFor } from "@testing-library/react";

const mockResult = {
    "sucess": true,
    "count": 4,
    "data": [
        {
          "_id": "6531336f0e47f257deca5e95",
          "name": "Chulalongkorn Hospital",
          "address": "1873 Rama IV Rd",
          "district": "Pathum Wan",
          "province": "Bangkok",
          "postalcode": "10330",
          "tel": "026494000",
          "picture": "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
          "__v": 0,
          "id": "6531336f0e47f257deca5e95"
        },
        {
          "_id": "653133bb0e47f257deca5e98",
          "name": "Rajavithi Hospital",
          "address": "2 Phaya Thai Rd, Thung Phaya Thai",
          "district": "Ratchathewi",
          "province": "Bangkok",
          "postalcode": "10400",
          "tel": "022062900",
          "picture": "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
          "__v": 0,
          "id": "653133bb0e47f257deca5e98"
        },
        {
          "_id": "653133f10e47f257deca5e9b",
          "name": "Thammasat University Hospital",
          "address": "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
          "district": "Khlong Luang",
          "province": "Pathum Thani",
          "postalcode": "12120",
          "tel": "029269999",
          "picture": "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
          "__v": 0,
          "id": "653133f10e47f257deca5e9b"
        },
        {
          "_id": "653feeb30062aca27de4a756",
          "name": "Vajira Hospital",
          "address": "681 Samsen Road",
          "district": "Dusit",
          "province": "Bangkok",
          "postalcode": "10300",
          "tel": "02-244-3000",
          "picture": "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
          "__v": 0,
          "id": "653feeb30062aca27de4a756"
        }
      ]
};

describe('HospitalCatalog', () => {
    it('should have correct number of hospital images', async () => {
        // Arrange
        const hospitalCatalog = await HospitalCatalog({hospitalJson: mockResult})
        
        // Act
        render(hospitalCatalog);

        // Assert
        await waitFor(
            ()=> {
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(4)
            }
        )
    });
});
