import React from 'react';
import {Accordion,AccordionItem,AccordionHeader,AccordionBody} from 'reactstrap'

export default function PreInterview() {
  return (   
    <div>
      <Accordion
        open="1"
        toggle={function noRefCheck(){}}
      >
        <AccordionItem>
          <AccordionHeader targetId="1">
            Accordion Item 1
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <strong>
              This is the first item's accordion body.
            </strong>
          1
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">
            Accordion Item 2
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <strong>
              This is the second item's accordion body.
            </strong>
            2
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">
            Accordion Item 3
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <strong>
              This is the third item's accordion body.
            </strong>
          3
            <code>
              .accordion-body
            </code>
            , though the transition does limit overflow.
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
