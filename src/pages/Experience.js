import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { DnsOutlined } from "@material-ui/icons";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined/>}
        >
          <h3 className="vertical-timeline-element-title">
            Father Name - Nataraj T V
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Mother Name - Parvathi N
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined  />}
        >
          <h3 className="vertical-timeline-element-title">
            Birth Date- 24/03/1995(Friday)
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined  />}
        >
          <h3 className="vertical-timeline-element-title">
            Birth Time - 12:30PM
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined  />}
        >
          <h3 className="vertical-timeline-element-title">
            Raashi(Zodiac sign) - Dhanu Raashi(sagittarius)
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined />}
        >
          <h3 className="vertical-timeline-element-title">
            Nakshatra - Uttarashada
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined  />}
        >
          <h3 className="vertical-timeline-element-title">
            Height - 5'4"
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined  />}
        >
          <h3 className="vertical-timeline-element-title">
            Siblings - Anuroopa N(Married -Housewife)
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<DnsOutlined  />}
        >
          <h3 className="vertical-timeline-element-title">
           Native - Nanjangud Town,Mysore Dist.
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2017"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Vidya Vikas Institute Of Engineering and Technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Mechanical Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Assistant Engineer - Sandvik mining and Rock Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mg Road, Bengaluru
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
