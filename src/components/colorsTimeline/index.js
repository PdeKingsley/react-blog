import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { blogListProfiles } from "../../data/data";
import BlockTimelineItem from "../blockTimelineItem";

let sortProfiles = blogListProfiles.sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date));

export default function ColorsTimeline() {
    return (
        <Timeline position="alternate"
        >
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    Yesterday Once More!
                </TimelineContent>
            </TimelineItem>
            {sortProfiles.map(obj =>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <BlockTimelineItem date={obj.date} title={obj.title}/>
                    </TimelineContent>
                </TimelineItem>
            )}
        </Timeline>
    );
}
