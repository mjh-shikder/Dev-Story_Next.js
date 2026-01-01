import React from 'react';

const TutorialPage = async ({ params }) => {
    
    const {technology, topic, page_no, subject} = await params;
    
    console.log({ technology, topic, page_no, subject });


    return (
        <div>
            This is Tutorial Page
        </div>
    );
};

export default TutorialPage;