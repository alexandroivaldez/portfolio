import React from "react";

const Contact = () => {
  return (
    <main className="font-jetbrains gap-5 flex-grow flex flex-col">
      <div className="font-bold text-3xl">
        <h1>Contact Me</h1>
      </div>
      <h2>
        Feel free to reach out for collaborations, opportunities or more. I'll
        get back to you as soon as possible.
      </h2>
      <form className="border border-gray-400 rounded p-5 flex flex-col gap-5">
        <div className="flex items-center justify-around">
          <div className="flex flex-col w-1/2">
            <label className="font-bold">First Name</label>
            <input type="text" placeholder="Enter your first name..." className="border border-gray-300 rounded p-2 w-[98%]" required></input>
          </div>
          <div className="flex flex-col w-1/2">
            <label className="font-bold">Last Name</label>
            <input type="text" placeholder="Enter your last name..." className="border border-gray-300 rounded p-2"  required></input>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-bold">Email</label>
          <input type="email" placeholder="Enter your email address..." className="border border-gray-300 rounded p-2" required></input>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold">Message</h3>
          <textarea placeholder="Enter your message here..." className="border border-gray-300 rounded p-2" required></textarea>
        </div>
        <button type="submit" className="bg-black text-white rounded p-2">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
