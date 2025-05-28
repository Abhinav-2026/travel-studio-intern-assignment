'use client';

import { useQuery } from '@tanstack/react-query';

const fetchRequests = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/requests`);
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  };
  
  

export default function DashboardClient() {
  const { data: requests = [], isLoading } = useQuery({
    queryKey: ['requests'],
    queryFn: fetchRequests,
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-white text-blue-900 p-4">
      <h1 className="text-2xl font-bold mb-4">Pending Guest Requests</h1>
      <table className="w-full table-auto border border-blue-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Request</th>
            <th className="p-2 border">Time</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((req: any) => (
            <tr key={req.id} className="border-t">
              <td className="p-2 border">{req.guestPhone}</td>
              <td className="p-2 border">{req.requestText}</td>
              <td className="p-2 border">{new Date(req.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
