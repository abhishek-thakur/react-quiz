import React from "react";
//styles
import { Wrapper, ButtonWrapper} from './QuestionCard.styles';

type Props = {
    question : string;
    answers : string[];
    callback : (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer : any;
    questinNr : number;
    totalQuestions : number
}

const QuestionCard: React.FC<Props> =({
    question,
    answers,
    callback,
    userAnswer,
    questinNr,
    totalQuestions
}) => (
    <Wrapper>
        <p className="number">
            Question {questinNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html:question }} />
        <div>
            {answers.map(answer => (
                <ButtonWrapper 
                    key={answer}
                    correct = {userAnswer?.correctAnswer === answer}
                    userClicked = {userAnswer?.answer === answer}
                >
                    {/* we can use both way for userAnswer button disabled property */}
                    {/* <button disabled = {!!userAnswer} value={answer} onClick={callback}> */}
                    <button disabled = {userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html:answer}}></span>
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
);
//49.10

export default QuestionCard;