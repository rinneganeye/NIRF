'use client'
import React, { useEffect, useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PencilSquareIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export function Sidebar() {

  const dummyData = [
    {
      "masterTitle": "Students",
      "forms": [
        {
          "label": "Student Intake and Strength",
          "path": "/students/intake-and-strength"
        },
        {
          "label": "PHD",
          "path": "/students/phd"
        },
        {
          "label": "Placement",
          "path": "/students/placement"
        }
      ]
    },
    {
      "masterTitle": "Faculty",
      "forms": [
        {
          "label": "Faculty Count",
          "path": "/faculties/faculty-count"
        },
        {
          "label": "Faculty Details",
          "path": "/faculties/faculty-details"
        },
        {
          "label": "International",
          "path": "/faculties/international-faculty"
        }
      ]
    },
    {
      "masterTitle": "Research & Patents",
      "forms": [
        {
          "label": "Project Sponsor",
          "path": "/research-and-patents/project-sponsors"
        },
        {
          "label": "Research Staff",
          "path": "/research-and-patents/research-staff"
        },
        {
          "label": "Patent Details",
          "path": "/research-and-patents/patent-details"
        },
        {
          "label": "Executive Development",
          "path": "/research-and-patents/executive-development"
        },
        {
          "label": "Consultancy Project",
          "path": "/research-and-patents/consultancy-project"
        }
      ]
    },
    {
      "masterTitle": "Employee",
      "forms": [
        {
          "label": "Employee Data",
          "path": "/employee-data"
        }
      ]
    },
    {
      "masterTitle": "Academic",
      "forms": [
        {
          "label": "Academic Peers",
          "path": "/academic-peers"
        }
      ]
    },
    {
      "masterTitle": "Financial",
      "forms": [
        {
          "label": "Financial Expenditure",
          "path": "/financial/financial-expenditure"
        }
      ]
    }
  ]


  const [showNav, setShowNav] = useState(true)
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };


  return (
    <>
      <button
        onClick={() => setShowNav(!showNav)}
        className="absolute top-20 left-4 bg-blue-gray-900 text-blue-300 lg:hidden px-4 py-1 rounded-md">{showNav ? "Close" : "Open"}</button>
      {
        showNav &&
        <main className="w-full h-fit min-h-screen max-w-[20rem] shadow-2xl">
          <div className="mt-16">
            <List>
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 1}>
                  <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                    <ListItemPrefix>
                      <PencilSquareIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                      Forms
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1">
                  {/* MAIN CONTENT START */}
                  {
                    dummyData.map((data, i) => {
                      return (

                        <List className="p-0" key={i}>
                          <ListItem className="flex flex-col cursor-default hover:bg-transparent" ripple={false}>
                            <List className="flex flex-col">
                              <div className="flex float-left font-semibold">
                                <ListItemPrefix>
                                  <ChevronRightIcon strokeWidth={3} className="h-4 w-4" />
                                </ListItemPrefix>
                                {data.masterTitle}
                              </div>
                              {
                                data.forms.map((form, i) => {
                                  return <Link href={form.path} key={i}>
                                    <ListItem className="pl-2">
                                      {form.label}
                                    </ListItem>
                                  </Link>
                                })
                              }
                            </List>
                          </ListItem>

                        </List>
                      )
                    })
                  }
                  {/* MAIN CONTENT END  */}
                </AccordionBody>
                <ListItem className="mt-2">
                  <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Profile
                </ListItem>
                <ListItem className="text-red-500 hover:bg-red-500 mt-2 hover:text-white">
                  <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log Out
                </ListItem>
              </Accordion>
            </List >

          </div>
        </main>
      }
    </>
  );
}