import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { SubjectMainObjectiveNode } from 'src/app/class/subject-main-objective-node';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  TREE_DATA: SubjectMainObjectiveNode[] = [
    {
      name: 'KOMPETENSI INTI (KI)',
      children: [
        { name: 'K-I : Menghayati dan mengamalkan ajaran agama yang dianutnya*)' },
        { name: 'K-2 : Menunjukkan perilaku jujur, disiplin, tanggung jawab, peduli (gotong royong, kerjasama, toleran, damai), santun, responsif, dan pro-aktif sebagai bagian dari solusi atas berbagai permasalahan dalam berinteraksi secara efektif dengan lingkungan sosial dan alam serta menempatkan diri sebagai cerminan bangsa dalam pergaulan dunia' },
        { name: 'K-3 : Memahami, menerapkan, dan menganalisis pengetahuan faktual, konseptual, prosedural, dan metakognitif berdasarkan rasa ingin tahunya tentang ilmu pengetahuan, teknologi, seni, budaya, dan humaniora dengan wawasan kemanusiaan, kebangsaan, kenegaraan, dan peradaban terkait penyebab fenomena dan kejadian, serta menerapkan pengetahuan prosedural pada bidang kajian yang spesifik sesuai dengan bakat dan minatnya untuk memecahkan masalah' },
        { name: 'K-4 : Mengolah, menalar, menyaji, dan mencipta dalam ranah konkret dan ranah abstrak terkait dengan pengembangan dari yang dipelajarinya di sekolah secara mandiri serta bertindak secara efektif dan kreatif, dan mampu menggunakan metoda sesuai kaidah keilmuan' },
      ],
    },
    {
      name: 'KOMPETENSI DASAR (KD)',
      children: [
        { name: '3.7. Mengelompokkan jamur berdasarkan ciri-ciri, cara reproduksi, dan mengaitkan peranannya dalam kehidupan sehari-hari' },
        { name: '4.7. Menyajikan laporan hasil investigasi tentang keanekaragaman jamur dan perananya dalam kehidupan' },
      ],
    },
    {
      name: 'TUJUAN PEMBELAJARAN (TB)',
      children: [
        { name: 'Menjelaskan ciri-ciri umum Divisio dalam Kingdom Fungi' },
        { name: 'Menjelaskan struktur tubuh jamur' },
        { name: 'Mengelompokkan jamur berdasarkan ciri-ciri morfologinya' },
        { name: 'Mengetahui cara hidup jamur' },
        { name: 'Menjelaskan perkembangbiakan jamur' },
        { name: 'Mengetahui peranan jamur dalam kehidupan manusia' }
      ],
    },
  ];

  treeControl = new NestedTreeControl<SubjectMainObjectiveNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<SubjectMainObjectiveNode>();

  hasChild = (_: number, node: SubjectMainObjectiveNode) => !!node.children && node.children.length > 0;

  constructor() {
    this.dataSource.data = this.TREE_DATA;
  }

  ngOnInit(): void { }

}
