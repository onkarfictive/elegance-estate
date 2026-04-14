"use client";
import React, { useState, useRef } from "react";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dropdown } from "primereact/dropdown";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
const ScheduleVisitForm = () => {
  const [date, setDate] = useState<Date | null>(null);
  const [time, setTime] = useState<any>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const toast = useRef<Toast>(null);
  const timeSlots = [
    { label: "10:00 AM", value: "10:00 AM" },
    { label: "11:00 AM", value: "11:00 AM" },
    { label: "12:00 PM", value: "12:00 PM" },
    { label: "02:00 PM", value: "02:00 PM" },
    { label: "03:00 PM", value: "03:00 PM" },
    { label: "04:00 PM", value: "04:00 PM" },
    { label: "05:00 PM", value: "05:00 PM" },
  ];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      toast.current?.show({
        severity: "warn",
        summary: "Incomplete Form",
        detail: "Please fill all details to schedule the visit.",
        life: 3000,
      });
      return;
    }
    if (phone.length !== 10) {
      toast.current?.show({
        severity: "warn",
        summary: "Invalid Phone",
        detail: "Please enter a valid 10-digit mobile number.",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "success",
      summary: "Visit Scheduled!",
      detail: `Thank you ${name}! Our agent will contact you for the visit on ${date.toLocaleDateString()} at ${time}.`,
      life: 5000,
    });
    setName("");
    setPhone("");
    setDate(null);
    setTime(null);
  };
  return (
    <div className="p-8 rounded-[2rem] bg-white dark:bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100 dark:border-zinc-800">
      <Toast ref={toast} />
      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1.5 tracking-tight">Schedule a Visit</h3>
      <p className="text-zinc-500 text-[13px] mb-8 leading-relaxed font-medium">Select your preferred date and time to tour this property with our expert consultant.</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-2.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-1">
            Full Name <span className="text-red-500">*</span>
          </label>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-user text-zinc-400"> </InputIcon>
            <InputText 
              required
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Your Name" 
              className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white transition-all text-sm font-medium"
            />
          </IconField>
        </div>
        <div className="flex flex-col gap-2.5">
          <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-phone text-zinc-400"> </InputIcon>
            <InputText 
              required
              value={phone} 
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, '');
                setPhone(value);
              }} 
              placeholder="10 Digit Mobile Number" 
              className="w-full h-12 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white transition-all text-sm font-medium"
            />
          </IconField>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-1">
              Date <span className="text-red-500">*</span>
            </label>
            <Calendar 
              required
              value={date} 
              onChange={(e) => setDate(e.value as Date)} 
              minDate={new Date()} 
              placeholder="DD/MM/YYYY"
              className="w-full h-12 custom-calendar"
              inputClassName="rounded-xl border-zinc-200 bg-zinc-50/50 hover:bg-white transition-all text-sm font-medium p-3"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 flex items-center gap-1">
              Time Slot <span className="text-red-500">*</span>
            </label>
            <Dropdown 
              required
              value={time} 
              options={timeSlots} 
              onChange={(e) => setTime(e.value)} 
              placeholder="Select Time" 
              className="w-full h-12 rounded-xl border-zinc-200 bg-zinc-50/50 hover:bg-white transition-all text-sm font-medium flex items-center"
            />
          </div>
        </div>
        <button 
          type="submit"
          className="w-full h-14 bg-zinc-900 hover:bg-blue-600 text-white rounded-2xl font-bold text-sm uppercase tracking-widest transition-all shadow-xl shadow-zinc-900/10 hover:shadow-blue-500/20 active:scale-[0.98] mt-4 flex items-center justify-center gap-2"
        >
          <i className="pi pi-calendar-plus text-base"></i>
          Confirm Schedule
        </button>
        <p className="text-[9px] text-center text-zinc-600 mt-6 px-4 uppercase tracking-tighter leading-relaxed font-bold">
          By clicking confirm, you agree to our terms of service and property visit guidelines.
        </p>
      </form>
    </div>
  );
};
export default ScheduleVisitForm;
