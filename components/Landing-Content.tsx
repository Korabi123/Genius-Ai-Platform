'use client';

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "Antonio",
    avatar: "A",
    title: "Software engineer",
    description:
      `Game-changing AI app! As a software engineer, 
      it's my secret weapon for lightning-fast coding and research. 
      Highly recommended for tech pros!`,
    
  },
  {
    name: "Liam",
    avatar: "L",
    title: "Data Analytics Manager",
    description:
      `From a Data Analytics Manager's perspective, 
      this AI app has been a game-changer. 
      It streamlines data processing, delivers accurate insights, 
      and integrates seamlessly with our tools. It's an indispensable asset for our team, 
      driving innovation and efficiency.`,
    
  },
  {
    name: "Emily",
    avatar: "E",
    title: "Marketing Specialist",
    description:
      `This AI application has revolutionized our marketing approach. 
      It's akin to having an expert team readily available, facilitating quicker data-driven decisions. 
      Its flexibility and ongoing learning ensure we stay ahead in the dynamic market. 
      It's an essential tool for any committed marketer!`,
    
  },
  {
    name: "Jacob",
    avatar: "J",
    title: "Content Writer",
    description:
      `My content creation pro is this AI app. 
      It grasps context, reduces time, and boosts creativity. 
      This paradigm shift is essential for all writers.`,
    
  },
];

export const LandingContent = () => {
  return(
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#192339] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div className="select-none">
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0 select-none">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}