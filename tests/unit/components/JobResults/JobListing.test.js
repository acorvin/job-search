import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'Uber',
    locations: 'New York',
    minimumQualifications: 'Code',
    ...jobProps
  })

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...jobProps
        }
      }
    })
  }

  it('renders job title', () => {
    const jobProps = createJobProps({ title: 'Vue Developer' })
    renderJobListing(jobProps)
    expect(screen.getByText('Vue Developer')).toBeInTheDocument()
  })

  it('renders job organization', () => {
    const jobProps = createJobProps({ organization: 'Uber' })
    renderJobListing(jobProps)
    expect(screen.getByText('Uber')).toBeInTheDocument()
  })

  it('renders job location', () => {
    const jobProps = createJobProps({ locations: ['New York', 'Seattle'] })
    renderJobListing(jobProps)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Seattle')).toBeInTheDocument()
  })

  it('renders minimum qualifications', () => {
    const jobProps = createJobProps({
      minimumQualifications: ['Develop', 'Code']
    })
    renderJobListing(jobProps)
    expect(screen.getByText('Develop')).toBeInTheDocument()
    expect(screen.getByText('Code')).toBeInTheDocument()
  })
})
