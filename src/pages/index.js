import React from 'react';
import Hero from '../components/Hero'
import Section from '../components/Section';
import Layout from '../components/Layout';

const places = [
    'San Francisco, USA',
    'New Delhi, India',
    'Sydney, Australia',
    'Ho Chi Mihn City, Vietnam',
    'Tel Aviv, Israel',
    'Berlin, Germany',
    'Porto, Portugal',
];

export default () => (
    <>
        <Hero />
        <Layout length={places.length}>
            {places.map((place, idx) => (
                <Section
                    id={idx}
                    isLast={places.length - 1 === idx}
                >
                    <h1>{place}</h1>
                </Section>
            ))}
        </Layout>
    </>
);
