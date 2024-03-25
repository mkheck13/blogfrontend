"use client";
import React, { useState } from "react";
import NavbarComponent from "../components/navbarComponent";
import BlogEntetries from "@/utils/BlogEntries.json";
import { IBlogItems } from "@/Interfaces/Interfaces";

const Blogpage = () => {
  const [blogItems, setBlogItems] = useState<IBlogItems[]>(BlogEntetries);
  return (
    <>
      <NavbarComponent />
      <div className="flex min-h-screen flex-col p-24">
        <h1 className="text-3xl text-center">Hello This is our blog page</h1>
        <div className="container flex justify-center min-w-full">
          <div className="w-auto">
            <div>
              {blogItems.map((item, idx) => {
                return (
                  <div key={item.id}>
                    {idx % 2 === 0 ? (
                      <div className="grid grid-cols-2 gap-4 mt-10">
                        <div className="p-10">
                          <div>
                            <h1 className="text-center text-3xl">
                              {item.title}
                            </h1>
                            <div className="flex justify-evenly">
                              <p>{item.publishedName}</p> <p>{item.date}</p>
                            </div>
                            <div>
                              <img
                                src={item.image}
                                alt="martial arts pic"
                                className="object-cover h-96 w-full"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="p-10">{item.description}</div>
                      </div>
                    ) : (
                        <div className="grid grid-cols-2 gap-4 mt-10">
                        <div className="p-10">{item.description}
                          <div className="p-10">
                            <h1 className="text-center text-3xl">
                              {item.title}
                            </h1>
                            <div className="flex justify-evenly">
                              <p>{item.publishedName}</p> <p>{item.date}</p>
                            </div>
                            <div>
                              <img
                                src={item.image}
                                alt="martial arts pic"
                                className="object-cover h-96 w-full"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogpage;
