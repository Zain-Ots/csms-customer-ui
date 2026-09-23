// lib/mockData.js
export let tickets = [
  {
    _id: "1",
    ticketNumber: "TKT-1001",
    subject: "Order not delivered",
    description: "My order was supposed to arrive 3 days ago",
    category: "Delivery Issue",
    priority: "High",
    status: "Open",
    customerId: "u1",
    assignedAgentId: "Not Yet Assigned",
    createdAt: "08 Sept 2026",
    updatedAt: "08 Sept 2026"
  },
    {
    _id: "2",
    ticketNumber: "TKT-1002",
    subject: "Order not delivered",
    description: "My order was supposed to arrive 2 days ago",
    category: "Delivery Issue",
    priority: "Medium",
    status: "Assigned",
    customerId: "u1",
    assignedAgentId: "John",
    createdAt: "08 Sept 2026",
    updatedAt: "08 Sept 2026"
  },
    {
    _id: "3",
    ticketNumber: "TKT-1003",
    subject: "Order not delivered",
    description: "My order was supposed to arrive 3 days ago",
    category: "Delivery Issue",
    priority: "High",
    status: "Resolved",
    customerId: "u1",
    assignedAgentId: "Helen",
    createdAt: "08 Sept 2026",
    updatedAt: "08 Sept 2026"
  }
];
const dummyMessages = [
  {
    ticket_id: "TKT-1001",
    sender_id: "CUSTOMER001",
    message: "Where is my order?",
    created_at: "2026-09-11T10:00:00"
  },
  {
    ticket_id: "TKT-1001",
    sender_id: "AGENT001",
    message: "I'm checking your order.",
    created_at: "2026-09-11T10:05:00"
  },
  {
    ticket_id: "TKT-1002",
    sender_id: "CUSTOMER001",
    message: "I want a refund.",
    created_at: "2026-09-11T11:00:00"
  }
];
export let messages = [
  { _id: "m1", ticketId: "1", senderId: "u1", message: "Any update on this?", createdAt: "2026-09-08T11:00:00Z" }
];

export const users = [
  { _id: "u1", name: "Zain", email: "zain@test.com", role: "customer" }
];