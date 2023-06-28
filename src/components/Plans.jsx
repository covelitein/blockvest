import React from 'react'
import { Heading, PlanCard } from './subcomponents';

const Plans = () => {
  return (
    <section className="mt-[10rem] py-4">
      <Heading
        plaintext={"OUR"}
        colored={"PLANS"}
        desc={"we offer flexible plans"}
      />
      <div className="w-11/12 px-3 mx-auto mt-5 grid md:grid-cols-2 grid-cols-1 gap-2">
        <PlanCard
          planGrade={'beginning plan'}
          percentage={'30%'}
          timeframe={'24 hours'}
          minimumPrice={'$200'}
          maximumPrice={'$5000'}
          CIRStatus={'yes'}
        />
        <PlanCard
          planGrade={'beginning plan'}
          percentage={'30%'}
          timeframe={'24 hours'}
          minimumPrice={'$200'}
          maximumPrice={'$5000'}
          CIRStatus={'yes'}
        />
        <PlanCard
          planGrade={'beginning plan'}
          percentage={'30%'}
          timeframe={'24 hours'}
          minimumPrice={'$200'}
          maximumPrice={'$5000'}
          CIRStatus={'yes'}
        />
        <PlanCard
          planGrade={'beginning plan'}
          percentage={'30%'}
          timeframe={'24 hours'}
          minimumPrice={'$200'}
          maximumPrice={'$5000'}
          CIRStatus={'yes'}
        />
      </div>
    </section>
  );
}

export default Plans