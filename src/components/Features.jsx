import React from "react";

export default function Features() {
  return (
    <section className="p-10">
      <h3 className="text-4xl text-center mb-10">Our Features</h3>
      <div className="grid-responsive gap-6">
        <div className="p-6 bg-secondary text-white rounded-lg">Feature One</div>
        <div className="p-6 bg-secondary text-white rounded-lg">Feature Two</div>
        <div className="p-6 bg-secondary text-white rounded-lg">Feature Three</div>
      </div>
    </section>
  );
}
