import { Circuit } from './circuit';
import { Session } from './session';

export interface Race {
	round: number;
	name: string;
	circuit: Circuit;
	firstPractice: Session;
	secondPractice: Session;
	thirdPractice: Session;
	qualifying: Session;
	sprint: Session;
	date: string;
	time: string;
	dateTime: Date;
}
