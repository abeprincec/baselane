export const activeTenantsColumns = [
  'Contact Name',
  'Contact Email',
  'Contact Number',
  'Tenant Platform Account Status',
];

export const activeTenantsData = [
  {
    id: '1',
    contactName: 'Anna Anderson',
    contactEmail: 'anna.anderson@gmail.com',
    contactNumber: '(929) 929-9292',
    accountStatuses: ['Active'],
    isExpanded: false,
    property: [
      {
        name: 'San Bernardino Duplex, Unit A',
        duration: 'May 09, 2021 - May 08, 2022',
      },
    ],
  },
  {
    id: '2',
    contactName: 'Barbara Tenant',
    contactEmail: 'br.tn@gmail.com',
    contactNumber: '(929) 345-7797',
    accountStatuses: ['Invite Sent', 'Resend'],
    isExpanded: false,
    property: [
      {
        name: 'San Bernardino Duplex, Unit A',
        duration: 'May 09, 2021 - May 08, 2022',
      },
      {
        name: 'San Bernardino Duplex, Unit B',
        duration: 'May 09, 2019 - May 08, 2020 - Expired',
      },
    ],
  },
  {
    id: '3',
    contactName: 'Cellin Johnson',
    contactEmail: 'cellin@gmail.com',
    contactNumber: '(929) 226-7797',
    accountStatuses: ['No Invite Sent'],
    isExpanded: false,
    property: [
      {
        name: 'San Bernardino Duplex, Unit A',
        continueLeaseSetUp: true,
      },
    ],
  },
  {
    id: '4',
    contactName: 'Damien Anderson',
    contactEmail: 'Damien.anderson@gmail.com',
    contactNumber: '(929) 226-7797',
    accountStatuses: ['Invite Sent', 'Resend'],
    isExpanded: false,
    property: [
      {
        name: 'San Bernardino Duplex, Unit A',
        duration: 'May 09, 2019 - May 08, 2020 - Expired',
      },
    ],
    propertyTags: ['No Active Lease', 'Archive'],
  },
  {
    id: '5',
    contactName: 'Anna Anderson',
    contactEmail: 'anna.anderson@gmail.com',
    contactNumber: '(929) 226-7797',
    accountStatuses: ['No Invite Sent'],
    isExpanded: false,
    propertyTags: ['No Active Lease', 'Archive'],
  },
];

export const archivedTenantsColumns = [
  'Contact Name',
  'Contact Email',
  'Contact Number',
];

export const archivedTenantsData = [
  {
    id: '1',
    contactName: 'Anna Anderson',
    contactEmail: 'anna.anderson@gmail.com',
    contactNumber: '(929) 929-9292',
    isExpanded: false,
    property: [
      {
        name: 'San Bernardino Duplex, Unit A',
        duration: 'May 09, 2019 - May 08, 2020',
      },
    ],
  },
  {
    id: '2',
    contactName: 'Anna Anderson',
    contactEmail: 'anna.anderson@gmail.com',
    contactNumber: '(929) 929-9292',
    isExpanded: false,
  },
  {
    id: '3',
    contactName: 'Barbara Tenant',
    contactEmail: 'br.tn@gmail.com',
    contactNumber: '(929) 345-7797',
    isExpanded: false,
    property: [
      {
        name: 'San Bernardino Duplex, Unit A',
        duration: 'May 09, 2021 - May 08, 2022',
      },
      {
        name: 'San Bernardino Duplex, Unit B',
        duration: 'May 09, 2019 - May 08, 2020 - Expired',
      },
    ],
  },
];
