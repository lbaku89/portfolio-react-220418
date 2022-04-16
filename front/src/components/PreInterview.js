import React from 'react';
import { Accordion,AccordionItem,AccordionHeader,AccordionBody} from 'reactstrap'

export default function PreInterview(){

function toggle(){
  
}

  return (   
    <div className='khysection1'>
      <div className='container-lg'>
        <div id="PreInterviewTitleBox" className="d-flex justify-contents-center align-items-start"> 
          <div className='bg-primary'></div>
          <h3 className='gmarket align-text-bottom'>솔직하게 적어봤어요</h3>
        </div>
        <div>
        <Accordion
          open="1"
          toggle={toggle}
        >
          <AccordionItem>
            <AccordionHeader targetId="1">
              Accordion Item 1
            </AccordionHeader>
            <AccordionBody accordionId="1">
              <strong>
                This is the first item's accordion body.
              </strong>
              You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
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
              You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
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
              You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the
              <code>
                .accordion-body
              </code>
              , though the transition does limit overflow.
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
      </div>
    </div>

  )
}
