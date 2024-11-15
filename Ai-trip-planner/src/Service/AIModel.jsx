/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

  
  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
   export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Travel Plan for Location: Las Vegas, for 3 days for couple with a Cheap Budget, Give me a Hotels options list with HotelName, Hotel address, Price, Hotel image Url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place details, Place image url, Geo Coordinates, ticket pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$100 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1900000/1898000/1897300/1897313_11.jpg\",\n      \"geoCoordinates\": \"36.1699° N, 115.1425° W\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly downtown hotel with a retro vibe, offering a casino, pool, and restaurants.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40-$80 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1900000/1898000/1897900/1897992_11.jpg\",\n      \"geoCoordinates\": \"36.1124° N, 115.1723° W\",\n      \"rating\": 3.5,\n      \"description\": \"A classic Las Vegas hotel known for its circus theme, family-friendly atmosphere, and affordable rates.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Hotel & Casino\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$60-$120 per night\",\n      \"hotelImageUrl\": \"https://images.trvl-media.com/hotels/2000000/1900000/1898000/1897200/1897288_11.jpg\",\n      \"geoCoordinates\": \"36.1698° N, 115.1418° W\",\n      \"rating\": 4.5,\n      \"description\": \"A stylish downtown hotel with a casino, pool, and restaurants, known for its luxurious atmosphere.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"A pedestrian-only street with live entertainment, light shows, and a canopy of 12 million lights.\",\n          \"placeImageUrl\": \"https://www.vegasexperience.com/media/uploads/freemont-street-experience_header.jpg\",\n          \"geoCoordinates\": \"36.1699° N, 115.1425° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 10:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Mob Museum\",\n          \"placeDetails\": \"A museum dedicated to the history of organized crime in Las Vegas and the United States.\",\n          \"placeImageUrl\": \"https://www.themobmuseum.org/media/images/mob-museum-exterior-day-wide-1600x1200.jpg\",\n          \"geoCoordinates\": \"36.1697° N, 115.1430° W\",\n          \"ticketPricing\": \"$25-$30\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"A scenic park with red rock cliffs, hiking trails, and rock climbing opportunities.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/learn/photosmultimedia/media/red-rock-canyon.jpg\",\n          \"geoCoordinates\": \"36.2322° N, 115.2655° W\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"rating\": 4.5,\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"An outdoor shopping and dining complex with the High Roller observation wheel.\",\n          \"placeImageUrl\": \"https://www.linq.com/media/images/linq-promenade-daytime.jpg\",\n          \"geoCoordinates\": \"36.1269° N, 115.1731° W\",\n          \"ticketPricing\": \"Free (High Roller tickets vary)\",\n          \"rating\": 4.0,\n          \"time\": \"Evening (6:00 PM - 9:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"A free attraction showcasing elaborate flower displays and seasonal themes.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory/2023/winter/conservatory-winter-2023.jpg\",\n          \"geoCoordinates\": \"36.1131° N, 115.1725° W\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Morning (10:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Venetian & The Palazzo\",\n          \"placeDetails\": \"A luxury resort complex with a replica of Venice, Italy, complete with canals and gondolas.\",\n          \"placeImageUrl\": \"https://www.venetian.com/content/dam/venetian/images/hotel/venetian-exterior.jpg\",\n          \"geoCoordinates\": \"36.1203° N, 115.1746° W\",\n          \"ticketPricing\": \"Free (gondola rides cost extra)\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Explanation:**\n\n* **Hotel Options:**  Provides a list of budget-friendly hotels in Las Vegas with their addresses, prices, images, coordinates, ratings, and brief descriptions.\n* **Itinerary:**  A 3-day itinerary that incorporates free and affordable attractions, balancing sightseeing with entertainment.\n* **Day Breakdown:** Each day's plan includes:\n    * **Place Name:** The name of the attraction.\n    * **Place Details:** A short description of the attraction.\n    * **Place Image Url:**  A link to an image of the attraction.\n    * **Geo Coordinates:** The geographic coordinates to help with navigation.\n    * **Ticket Pricing:** The cost of entry or tickets, if applicable.\n    * **Rating:** A general rating (out of 5) to give an idea of its popularity.\n    * **Time:**  Recommended time of day to visit to maximize the experience.\n\n**Important Considerations:**\n\n* **Transportation:**  Las Vegas has a public transportation system (RTC), but for maximum cost-effectiveness, consider walking, using ride-sharing services (Uber/Lyft), or renting a car. \n* **Food:** Take advantage of free buffets at casinos or pack your own snacks and drinks. Many restaurants offer happy hour specials and discounts.\n* **Flexibility:**  Don't be afraid to adjust the itinerary based on your interests and time constraints.\n\n**Remember:** These are just suggestions, and you can customize the plan based on your preferences and budget. Have a great trip! \n"},
          ],
        },
      ],
    });
  
    

