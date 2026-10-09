export type Category = 'maras' | 'esztergalas' | 'egyeb';

export interface Machine {
  type: string;
  make?: string;
  model?: string;
  year?: string;
  capacity?: string;
  note?: string;
  category: Category;
}

export const categories: Record<Category, string> = {
  maras: 'Marás',
  esztergalas: 'Esztergálás',
  egyeb: 'Egyéb technológiák',
};

export const machines: Machine[] = [
  { type: 'CNC megmunkálóközpont', make: 'Hurco', model: 'VMX 30i', year: '2017', capacity: '760 × 510 × 610 mm', note: '4 tengelyes', category: 'maras' },
  { type: 'CNC megmunkálóközpont', make: 'Brother', model: 'TC-32A', year: '2002', capacity: '450 × 250 × 300 mm', note: 'Kétpalettás, 5 tengelyes', category: 'maras' },
  { type: 'CNC megmunkálóközpont', make: 'Hurco', model: 'VMX 24', year: '2004', capacity: '610 × 510 × 610 mm', note: '3 tengelyes', category: 'maras' },
  { type: 'CNC megmunkálóközpont', make: 'Hurco', model: 'VMX 30', year: '2000', capacity: '760 × 450 × 610 mm', note: '3 tengelyes', category: 'maras' },
  { type: 'CNC megmunkálóközpont', make: 'Hurco', model: 'VM1', year: '2004', capacity: '610 × 450 × 400 mm', note: '3 tengelyes', category: 'maras' },
  { type: 'Egyetemes marógép', make: 'Reiden', capacity: '800 × 300 × 300 mm', category: 'maras' },
  { type: 'CNC eszterga', make: 'Okuma Genos', model: 'L 200 E-M', year: '2013', capacity: 'Ø200 × 350 mm', note: 'Hajtott szerszámos', category: 'esztergalas' },
  { type: 'Egyetemes eszterga', model: 'CY 6250B/1500', year: '2012', capacity: 'Ø500 × 1500 mm', category: 'esztergalas' },
  { type: 'Egyetemes eszterga', model: 'E3N-01', year: '2015 (felújítva)', capacity: 'Ø200 × 750 mm', category: 'esztergalas' },
  { type: 'Huzalszikraforgácsoló', make: 'Fanuc', model: 'Robocut α-OB', year: '2002', capacity: '250 × 200 × 150 mm', category: 'egyeb' },
  { type: 'Menethengerlő gép', make: 'Mosquito', capacity: 'M3 – M12', category: 'egyeb' },
  { type: 'Szalagfűrész', make: 'Bomar', model: '320.250 G', year: '2006', category: 'egyeb' },
  { type: 'Vibrációs csiszológép', note: 'Sorjázás, felületsimítás', category: 'egyeb' },
];
