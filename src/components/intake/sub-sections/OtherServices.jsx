import TextArea from '../../ui/solid/TextArea'
import SubSection from '../SubSection'

export default function OtherServices(props) {
  return (
    <SubSection {...props} title="Other services">
      <div class="space-y-4">
        <p>
          <b>Not sure what you need yet? That's okay. </b>
        </p>
        <TextArea
          name="service_oth_questions"
          label="Tell us what you're working on, where you're stuck, or what questions you have"
          hint={
            <div>
              To help guide your response, you might consider:
              <ul>
                <li>Are you planning a new research, operational, or QI project?</li>
                <li>
                  Do you need help collecting data, analyzing it, or understanding study
                  methods?
                </li>
                <li>
                  Are you looking for technical tools or platforms to support your work?
                </li>
                <li>
                  Do you have a deadline, funder, or ethics requirement you're working
                  toward?
                </li>
              </ul>
            </div>
          }
        />
      </div>
    </SubSection>
  )
}
