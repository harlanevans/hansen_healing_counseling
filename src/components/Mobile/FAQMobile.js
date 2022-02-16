import React, { useState } from 'react';
// import { CompTitle, Text, SmallerText } from "./Global";
import { MobTitle, MobText, SmallerText } from "./Styles";
import { Fade } from "react-reveal";
import { Accordion, Icon } from 'semantic-ui-react'
import { HashLink } from 'react-router-hash-link';

const FAQMobile = () => {
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? -1 : index
    setActiveIndex(newIndex)
  }

  return (
    <div className='faq-wrapper-mob'>
      <Fade>
        <div className='faq-title-mob'>
          <MobTitle>
            FAQ
          </MobTitle>
        </div>
        <Fade>

          <div className='faq-accordian-cont'>
            <Accordion styled>
              <Accordion.Title
                active={activeIndex === 0}
                index={0}
                onClick={handleClick}
              >
                <SmallerText>
                  <Icon name='dropdown' />
                  Will this work help me?
                </SmallerText>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 0}>
                <MobText>
                  <div style={{ paddingBottom: '1em' }}>
                    This work may be for you if you suffer with the following symptomatology:
                  </div>
                  <ul>
                    <li>
                      Chronic digestive issues
                    </li>
                    <li>
                      Chronic headaches
                    </li>
                    <li>
                      Jaw issues
                    </li>
                    <li>
                      Exhausted parasympathetic system--always trying to cope; always trying to be ok!
                    </li>
                    <li>
                      Tightness in the body
                    </li>
                    <li>
                      'Clumsy' or get hurt often.
                    </li>
                    <li>
                      Sensory overload-touch, sight, sound, ect
                    </li>
                    <li>
                      Feel socially or emotionally off
                    </li>
                    <li>
                      Eat, drink, or use more than YOU want to.
                    </li>
                    <li>
                      You feel like you have ADHD/ADD-hard to focus.
                    </li>
                    <li>
                      Experience road rage or have been through a car accident(s)
                    </li>
                    <li>
                      You are tired of 'talking about it'!
                    </li>
                  </ul>
                </MobText>
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex === 1}
                index={1}
                onClick={handleClick}
              >
                <SmallerText>
                  <Icon name='dropdown' />
                  What can I expect?
                </SmallerText>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 1}>
                <MobText>
                  <div style={{ paddingBottom: '1em' }}>
                    Transforming Presence: We will meet on Zoom for the session.
                    Place yourself in a relaxing environment.
                    All you need is a supportive chair or flat surface to relax on.
                  </div>
                  <div style={{ paddingBottom: '1em' }}>
                    Transforming Touch: We will meet in person and you
                    have the option to lie (fully clothed) on my massage table.
                  </div>
                  <div style={{ paddingBottom: '1em' }}>
                    **In both modalities, upon arriving you have the option to do 5 or so minutes of Yoga,
                    to get settled together and for you to get in your body.
                    You can let me know at the beginning of session if you would like this option.
                  </div>

                </MobText>
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex === 2}
                index={2}
                onClick={handleClick}
              >
                <SmallerText>
                  <Icon name='dropdown' />
                  What are your rates?
                </SmallerText>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 2}>
                <MobText>
                  <div style={{ paddingBottom: '1em' }}>
                    Transforming Presence of Transforming Touch session:
                  </div>
                  <div style={{ paddingBottom: '1em' }}>
                    60 min session: 130$-full protocol
                  </div>
                  <div style={{ paddingBottom: '1em' }}>
                    30 min session: 65$-grounding session
                  </div>
                </MobText>
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex === 3}
                index={3}
                onClick={handleClick}
              >
                <SmallerText>
                  <Icon name='dropdown' />
                  Cancellation/Missed Appointment Policy:
                </SmallerText>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 3}>
                <MobText>
                  <div style={{ paddingBottom: '1em' }}>
                    I require 24 hours notice for all cancellations. Failure to cancel within that time frame results in a charge of your full session fee.
                  </div>
                </MobText>
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex === 4}
                index={4}
                onClick={handleClick}
              >
                <SmallerText>
                  <Icon name='dropdown' />
                  How long will it take? Or, How will I know when I'm "done"?
                </SmallerText>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 4}>
                <MobText>
                  <div style={{ paddingBottom: '1em' }}>
                    Everyones nervous system is different. If we are a good fit,
                    it can take a couple sessions to several months of consistency
                    to see big change. We never go faster than you want to, it is always at your pace.
                  </div>
                </MobText>
              </Accordion.Content>
              <Accordion.Title
                active={activeIndex === 5}
                index={5}
                onClick={handleClick}
              >
                <SmallerText>
                  <Icon name='dropdown' />
                  First appointment:
                </SmallerText>
              </Accordion.Title>
              <Accordion.Content active={activeIndex === 5}>
                <MobText>
                  <div style={{ paddingBottom: '1em' }}>
                    Please call me at
                    <a href="tel: 480-382-7552" style={{padding: '0em 3px'}}>
                      480-382-7552
                    </a>
                    and we can talk for 15 min to discuss if this
                    work is going to be a good fit.
                    You can also contact me via email or through
                    <HashLink to="/#contact" smooth style={{ paddingLeft: '2px' }}>
                      this form
                    </HashLink>
                  </div>
                </MobText>
              </Accordion.Content>
            </Accordion>
          </div>
        </Fade>

      </Fade>
    </div>
  )
}

export default FAQMobile