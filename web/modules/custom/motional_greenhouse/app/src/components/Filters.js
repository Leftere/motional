/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQueryState } from 'react-router-use-location-state'

import { setOfficeId } from '../redux/officesSlice'
import { setSearchTerm, setCurrentPage } from '../redux/jobsSlice'
import {
  setWorkType,
  selectWorkTypes,
  setDepartmentForWebsite,
  selectDepartments,
} from '../redux/metadataSlice'

import Filter from './Filter'
import AccordionFilter from './AccordionFilter'
import Button from './Button'
import SVG from 'react-inlinesvg'

const Filters = () => {
  const dispatch = useDispatch()
  const searchTerm = useSelector((state) => state.jobs.searchTerm)
  const offices = useSelector((state) => state.offices.results)
  const officeId = useSelector((state) => state.offices.officeId)
  const departments = useSelector(selectDepartments)
  const departmentForWebsite = useSelector(
    (state) => state.metadata.departmentForWebsite
  )
  const workTypes = useSelector(selectWorkTypes)
  const workType = useSelector((state) => state.metadata.workType)
  const currentPage = useSelector((state) => state.jobs.currentPage)
  const [searchState, setSearchState] = useState('')

  // querystring
  const [searchQuery, setSearchQuery] = useQueryState('search', '')
  const [locationQuery, setLocationQuery] = useQueryState('location', '')
  const [departmentQuery, setDepartmentQuery] = useQueryState('department', '')
  const [employmentTypeQuery, setEmploymentTypeQuery] = useQueryState(
    'employmentType',
    ''
  )

  const [isActive, setActive] = useState(false)
  const [showSearch, setShowSearch] = useState(false)

  const officeOptions = offices
    .filter((office) => office.location)
    .map((office) => ({
      value: office?.id,
      label: office?.name,
    }))

  const departmentOptions = departments.map((department) => ({
    value: department?.value,
    label: department?.value,
  }))

  const workTypeOptions = workTypes
    .filter((workType) => workType.value)
    .map((value) => ({
      value: value?.value,
      label: value?.value,
    }))

  function setSearch(searchString) {
    setSearchTerm(searchString)
    dispatch(setSearchTerm(searchString))
  }

  function setOffice(officeId) {
    dispatch(setOfficeId(officeId))
    if (currentPage !== 0) {
      dispatch(setCurrentPage(0))
    }
  }

  function setDepartment(departmentForWebsite) {
    dispatch(setDepartmentForWebsite(departmentForWebsite))

    if (currentPage !== 0) {
      dispatch(setCurrentPage(0))
    }
  }

  function setEmploymentType(workType) {
    dispatch(setWorkType(workType))
    if (currentPage !== 0) {
      dispatch(setCurrentPage(0))
    }
  }

  function handleOfficeChange(office, actionType) {
    if (actionType.action === 'select-option') {
      setOffice(office?.value.toString())
    }
    if (actionType.action === 'clear') {
      setOffice('')
    }
  }

  function handleDepartmentChange(department, actionType) {
    if (actionType.action === 'select-option') {
      setDepartment(department?.value.toString())
    }
    if (actionType.action === 'clear') {
      setDepartment('')
    }
  }

  function handleWorkTypeChange(workType, actionType) {
    if (actionType.action === 'select-option') {
      setEmploymentType(workType?.value.toString())
    }
    if (actionType.action === 'clear') {
      setEmploymentType('')
    }
  }

  const handleSearchChange = (e) => {
    setSearchState(e.target.value)
  }

  const handleClearAll = (e) => {
    dispatch(setSearchTerm(''))
    setSearchState('')
    setOffice('')
    setDepartment('')
    setEmploymentType('')
    toggleDropdown(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(searchState)
  }

  // Querystring to redux state
  useEffect(() => {
    if (searchQuery !== null) {
      setSearchState(searchQuery.toString())
      setSearch(searchQuery.toString())
    }
  }, [searchQuery])

  useEffect(() => {
    if (locationQuery !== null) {
      setOffice(locationQuery.toString())
    }
  }, [locationQuery])

  useEffect(() => {
    if (departmentQuery !== null) {
      setDepartment(departmentQuery.toString())
    }
  }, [departmentQuery])

  useEffect(() => {
    if (employmentTypeQuery !== null) {
      setEmploymentType(employmentTypeQuery.toString())
    }
  }, [employmentTypeQuery])

  // Redux state to querystring
  useEffect(() => {
    setSearchQuery(searchTerm)
  }, [setSearchQuery, searchTerm])

  useEffect(() => {
    setLocationQuery(officeId)
  }, [setLocationQuery, officeId])

  useEffect(() => {
    setDepartmentQuery(departmentForWebsite)
  }, [setDepartmentQuery, departmentForWebsite])

  useEffect(() => {
    setEmploymentTypeQuery(workType)
  }, [setEmploymentTypeQuery, workType])

  const toggleDropdown = () => {
    setActive(!isActive)
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
  }

  return (
    <section className="filters">
      <div className="filters__inner">
        <div className="filters__wrapper">
          <form className="filters__form" onSubmit={handleSubmit}>
            <div className="filters__search-jobs">
              <div className="filters__search">
                <input
                  id="search-input"
                  name="search"
                  type="text"
                  placeholder="Search Jobs"
                  onChange={handleSearchChange}
                  value={searchState}
                />
                <div className="search-icon" onClick={handleSubmit}>
                  <SVG
                    src="/modules/custom/motional_greenhouse/app/build/images/icons/arrow-next.svg"
                    title="Search"
                  />
                </div>
              </div>
            </div>
            <div className="filters__selects">
              <Filter
                id="office"
                options={officeOptions}
                selected={officeId}
                onChange={handleOfficeChange}
                label="Location"
                placeholder="Filter by location"
              />

              <Filter
                id="department"
                options={departmentOptions}
                selected={departmentForWebsite}
                onChange={handleDepartmentChange}
                label="Department"
                placeholder="Filter by department"
              />

              <Filter
                id="workType"
                options={workTypeOptions}
                selected={workType}
                onChange={handleWorkTypeChange}
                label="Employment Type"
                placeholder="Filter by employment type"
              />
            </div>
            <button type="submit" style={{ visibility: "hidden" }} />
          </form>
          <div className="filters__clear">
            <Button onClick={handleClearAll} className="btn--link">
              Clear All Filters
            </Button>
          </div>
        </div>
      </div>
      <div className="filters__mobile">
        <form className="filters__mobile_form" onSubmit={handleSubmit}>
          <div className="filters__form_content">
            <div className="filters__dropdown">
              {isActive && !showSearch && (
                <div className="filters__accordion_content">
                  <AccordionFilter
                    id="office"
                    options={officeOptions}
                    selected={officeId}
                    onChange={setOffice}
                    closeParent={toggleDropdown}
                    label="Location"
                  />
                  <AccordionFilter
                    id="department"
                    options={departmentOptions}
                    selected={departmentForWebsite}
                    onChange={setDepartment}
                    closeParent={toggleDropdown}
                    label="Department"
                  />
                  <AccordionFilter
                    id="workType"
                    options={workTypeOptions}
                    selected={workType}
                    onChange={setEmploymentType}
                    closeParent={toggleDropdown}
                    label="Employment Type"
                  />
                  <div className="filters__accordion_clear">
                    <div
                      className="filters__accordion_clear_btn"
                      onClick={handleClearAll}
                    >
                      <span>
                        <SVG src="/modules/custom/motional_greenhouse/app/build/images/icons/close.svg" />
                      </span>{" "}
                      Clear All Filters
                    </div>
                  </div>
                </div>
              )}
              <button
                className="filters__dropdown_btn"
                onClick={toggleDropdown}
              >
                <span className="filters__label-filters">Filter</span>
                <span>
                  <SVG
                    src="/modules/custom/motional_greenhouse/app/build/images/icons/chevron.svg"
                    className={isActive ? "active" : ""}
                  />
                </span>
              </button>
              <input
                id="search-input"
                name="search"
                type="text"
                placeholder="Search Jobs"
                onChange={handleSearchChange}
                value={searchState}
                className={showSearch ? "active" : ""}
              />
            </div>
            <div className="filters__mobile_search">
              <button className="filters__search_button" onClick={toggleSearch}>
                <SVG src="/modules/custom/motional_greenhouse/app/build/images/icons/search.svg" />
              </button>
            </div>
          </div>
          <button type="submit" style={{ visibility: "hidden", padding: 0 }} />
        </form>
      </div>
    </section>
  );
}

export default Filters
