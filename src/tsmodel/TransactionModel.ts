/**
 * Created by Hafid on 4/6/2018.
 */

export interface TransactionModel {
  id: number;
  date: number;
  fixedPrice: number;
  predictionPrice: number;
  prepaidPrice: number;
  expiredTransactionTime: number;
  receiptPath: string; //probably date
  locationLatitude: number;
  locationLongitude: number;
  transactionDescription: string;
  homecareTransactionCaregiverlistList: TransactionCaregiver[];
  homecareAssessmentRecordList: AssessmentRecord[];
  transactionStatusId: TransactionStatus;
  homecarePatientId: HomecarePatient;
  paymentMethodId: PaymentMethod;
}

export interface PaymentMethod {

}

export interface HomecarePatient {

}

export interface TransactionStatus {
  id:number;
}

export interface AssessmentRecord {
  id: number;
  assessmentAnswer: string;
  filePath: string;
  idAssessment: Assessment;
}

export interface Assessment {
  id: number;
}

export interface TransactionCaregiver {
  id: number;
  caregiverName: string;
  caregiverNurseNumber: string;
  idHomecareClinic: any;
  idCaregiver: number;
  rateStatus: boolean;
}
/*
 "id": 1,
 "date": 1515295374000,
 "fixedPrice": 0,
 "predictionPrice": 200000,
 "prepaidPrice": 150000,
 "expiredTransactionTime": 1515468179000,
 "receiptPath": "c://data",
 "locationLatitude": ” -6.913373”,
 "locationLongitude": “107.799211”,
 "transactionDescription": "This is transaction from mobile Android device",
 "homecareTransactionCaregiverlistList": [],
 "homecareAssessmentRecordList" :
 [
 {
 "assessmentAnswer": "27 Tahun",
 "filePath": "c://pictures",
 "idAssessment": {"id": 1}
 },
 {
 "assessmentAnswer": "Islam",
 "filePath": "c://pictures",
 "idAssessment": {"id": 4}
 } , and so on .....
 ],
 "transactionStatusId": {"id" : 2}, // 1. Paid, 2. Unpaid, 3. Failed, 4. Cancelled. 5. Expire, 6. Finish, 7. Paid Down Payment
 "homecarePatientId": {"id": 9},
 "paymentMethodId": {"id": 1} // 1. Transfer Bank, 2 Virtual Account Bank, 3. Timedic Pay.
 */
