import { render, screen } from '@testing-library/vue'
import { RouterLinkStub } from '@vue/test-utils'

import type { Job } from '@/api/types'
import JobListing from '@/components/JobResults/JobListing.vue'

import { createJob } from '../../../utils/createJob'

describe('JobListing', () => {
  const renderJobListing = (job: Job) => {
    render(JobListing, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: {
        job: {
          ...job
        }
      }
    })
  }

  it('renders job title', () => {
    const jobProps = createJob({ title: 'Vue Developer' })
    renderJobListing(jobProps)
    expect(screen.getByText('Vue Developer')).toBeInTheDocument()
  })

  it('renders job organization', () => {
    const jobProps = createJob({ organization: 'Uber' })
    renderJobListing(jobProps)
    expect(screen.getByText('Uber')).toBeInTheDocument()
  })

  it('renders job location', () => {
    const jobProps = createJob({ locations: ['New York', 'Seattle'] })
    renderJobListing(jobProps)
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Seattle')).toBeInTheDocument()
  })

  it('renders minimum qualifications', () => {
    const jobProps = createJob({
      minimumQualifications: ['Develop', 'Code']
    })
    renderJobListing(jobProps)
    expect(screen.getByText('Develop')).toBeInTheDocument()
    expect(screen.getByText('Code')).toBeInTheDocument()
  })
})
